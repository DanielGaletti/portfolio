#!/usr/bin/env python3
"""
Blog Agent - Weekly search for AI and Computer Vision articles on arXiv
and populate the blog with the 3 most interesting ones.
"""

import os
import json
import arxiv
import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import List
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
from git import Repo
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
TOKEN = os.getenv("TOKEN")
REPO_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class BlogAgent:
    def __init__(self):
        self.repo = Repo(REPO_PATH)
        self.articles_dir = Path(REPO_PATH) / "public" / "articles"
        self.llm = None
        try:
            self.llm = self.create_llm()
        except Exception:
            logger.error("Could not initialize ChatGroq. Check GROQ_API_KEY.")

    def create_llm(self):
        if not GROQ_API_KEY:
            raise ValueError(
                "GROQ_API_KEY environment variable is not set. "
                "Set it in the .env file or in the environment before running the agent."
            )

        model = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
        return ChatGroq(
            api_key=GROQ_API_KEY,
            model=model,
            temperature=0.5,
        )

    def fetch_arxiv_articles(self, max_results: int = 50) -> List[dict]:
        last_week = datetime.now() - timedelta(days=7)

        query = (
            'cat:cs.AI OR cat:cs.CV AND '
            'submittedDate:[' + last_week.strftime('%Y%m%d') + '000000 TO ' +
            datetime.now().strftime('%Y%m%d') + '235959]'
        )

        client = arxiv.Client()
        articles = []

        search = arxiv.Search(
            query=query,
            max_results=max_results,
            sort_by=arxiv.SortCriterion.SubmittedDate,
            sort_order=arxiv.SortOrder.Descending
        )

        for result in client.results(search):
            articles.append({
                'title': result.title,
                'authors': ', '.join([author.name for author in result.authors[:3]]),
                'summary': result.summary,
                'arxiv_id': result.entry_id.split('/abs/')[-1],
                'published': result.published.isoformat(),
                'arxiv_url': 'https://arxiv.org/abs/' + result.entry_id.split('/abs/')[-1],
                'categories': result.categories
            })

        logger.info(f"Found {len(articles)} articles")
        return articles

    def select_best_articles(self, articles: List[dict]) -> List[dict]:

        articles_text = "\n\n".join([
            f"ID: {i}\n"
            f"Title: {article['title']}\n"
            f"Authors: {article['authors']}\n"
            f"Abstract: {article['summary'][:500]}..."
            for i, article in enumerate(articles[:20])
        ])

        prompt = f"""You are an expert in Artificial Intelligence and Computer Vision.

Analyze the following recent arXiv papers and select the 3 MOST INTERESTING and INNOVATIVE ones.
Consider:
- Novelty of the research
- Potential impact
- Relevance to the field
- Clarity of contribution

Papers:
{articles_text}

Respond ONLY with a JSON list in the format:
[{{"id": 0, "reason": "brief reason"}}, {{"id": 1, "reason": "reason"}}, {{"id": 2, "reason": "reason"}}]

Do not include any text besides the JSON."""

        try:
            response = self.llm.invoke([HumanMessage(content=prompt)])
            response_text = response.content.strip()

            json_match = re.search(r'\[.*\]', response_text, re.DOTALL)
            if json_match:
                selections = json.loads(json_match.group())
                selected = [articles[sel['id']] for sel in selections if sel['id'] < len(articles)]
                return selected[:3]
        except Exception as e:
            logger.error(f"Error selecting articles: {e}")

        return articles[:3]

    def generate_article_markdown(self, article: dict, index: int) -> tuple[str, str]:
        """Generates markdown file for an article."""
        logger.info(f"Generating markdown for: {article['title']}")

        slug = re.sub(r'[^\w\s-]', '', article['title'].lower())
        slug = re.sub(r'[-\s]+', '-', slug)
        slug = f"{datetime.now().strftime('%Y%m%d')}-{index}-{slug[:30]}"

        summary_prompt = f"""Summarize this paper clearly and technically in 3-4 paragraphs. Write in English.

Title: {article['title']}
Original Abstract: {article['summary']}

Do not include references or additional explanations."""

        try:
            summary_response = self.llm.invoke([HumanMessage(content=summary_prompt)])
            summary = summary_response.content.strip()
        except Exception as e:
            logger.warning(f"Error generating AI summary: {e}")
            summary = article['summary']

        date_obj = datetime.fromisoformat(article['published'].replace('Z', '+00:00'))
        formatted_date = date_obj.strftime('%m/%d/%Y')

        frontmatter = f"""---
title: "{article['title']}"
date: "{formatted_date}"
authors: "{article['authors']}"
arxivUrl: "{article['arxiv_url']}"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---
"""

        content = f"""{frontmatter}

## Summary

{summary}

## Reference

- **ArXiv ID**: {article['arxiv_id']}
- **Link**: [{article['arxiv_id']}]({article['arxiv_url']})
- **Authors**: {article['authors']}
- **Published**: {formatted_date}

## Categories

{', '.join(article['categories'])}
"""

        return slug, content

    def save_articles(self, articles: List[dict]):
        """Saves articles as markdown files, replacing the previous week's articles."""
        logger.info("Saving articles...")

        self.articles_dir.mkdir(parents=True, exist_ok=True)

        articles_json_path = self.articles_dir / "articles.json"

        # Delete old article files
        if articles_json_path.exists():
            old_data = json.loads(articles_json_path.read_text())
            for old_slug in old_data.get('slugs', []):
                old_file = self.articles_dir / f"{old_slug}.md"
                if old_file.exists():
                    old_file.unlink()
                    logger.info(f"Deleted old article: {old_file.name}")

        slugs = []
        for index, article in enumerate(articles):
            slug, content = self.generate_article_markdown(article, index)

            file_path = self.articles_dir / f"{slug}.md"
            file_path.write_text(content, encoding='utf-8')
            logger.info(f"Saved: {file_path.name}")

            slugs.append(slug)

        # Overwrite articles.json with only the 3 new slugs
        updated_data = {'slugs': slugs}
        articles_json_path.write_text(
            json.dumps(updated_data, ensure_ascii=False, indent=2),
            encoding='utf-8'
        )
        logger.info(f"Updated: {articles_json_path.name}")

        return slugs

    def commit_and_push(self, article_slugs: List[str]):
        """Commits and pushes changes."""
        logger.info("Committing and pushing...")

        try:
            self.repo.git.config('user.email', 'blog-agent@example.com')
            self.repo.git.config('user.name', 'Blog Agent')

            for slug in article_slugs:
                self.repo.index.add([str(self.articles_dir / f"{slug}.md")])
            self.repo.index.add([str(self.articles_dir / "articles.json")])

            commit_message = f"Weekly update: {len(article_slugs)} new arXiv articles"
            self.repo.index.commit(commit_message)
            logger.info(f"Commit done: {commit_message}")

            if TOKEN:
                origin = self.repo.remote('origin')
                origin_url = origin.url
                if origin_url.startswith("https://"):
                    auth_url = origin_url.replace(
                        "https://",
                        f"https://x-access-token:{TOKEN}@",
                        1,
                    )
                    branch_name = self.repo.active_branch.name
                    self.repo.git.push(auth_url, f"HEAD:{branch_name}")
                    logger.info("Push successful via TOKEN")
                else:
                    logger.warning(
                        "Remote origin is not HTTPS. Attempting default push without credentials."
                    )
                    origin.push()
                    logger.info("Push successful")
            else:
                logger.warning("TOKEN not configured, skipping push")

        except Exception as e:
            logger.error(f"Error during commit/push: {e}")

    def run(self):
        """Runs the full pipeline."""
        logger.info("Starting Blog Agent...")

        if self.llm is None:
            logger.error(
                "LLM not initialized. Check that GROQ_API_KEY is set in .env or the environment."
            )
            return

        try:
            # 1. Fetch articles from arXiv
            articles = self.fetch_arxiv_articles()

            if not articles:
                logger.warning("No articles found on arXiv")
                return

            # 2. Select the best 3
            best_articles = self.select_best_articles(articles)

            if not best_articles:
                logger.warning("No articles were selected")
                return

            logger.info(f"Selected {len(best_articles)} articles")

            # 3. Save as markdown (replaces previous week's articles)
            slugs = self.save_articles(best_articles)

            # 4. Commit and push
            self.commit_and_push(slugs)

            logger.info("Blog Agent finished successfully!")

        except Exception as e:
            logger.error(f"Error running Blog Agent: {e}")
            raise

if __name__ == "__main__":
    agent = BlogAgent()
    agent.run()
