---
title: "WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution"
date: "08/27/2026"
authors: "Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng"
arxivUrl: "https://arxiv.org/abs/2608.27454v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Agent skills package specialized knowledge and workflows into reusable resources that extend AI agent capabilities. Recent work automatically discovers such skills from agent experience, which enables agents to progressively adapt through interaction. However, the insights that guide skill development typically remain scattered across optimization histories, limiting their systematic reuse across iterations. We introduce WikiSkill, a framework that co-evolves agent skills with a persistent knowledge base (wiki). At a high level, WikiSkill separates raw execution experience, accumulated knowledge, and executable skills, while continuously consolidating experience into the wiki, which subsequent skill updates can build on. Across diverse benchmarks and models, WikiSkill consistently outperforms state-of-the-art skill-evolution methods and improves over no-skill baselines in most model-benchmark settings. We find that skill evolution complements model scaling: larger models generally benefit more from evolved skills, while smaller models with skills can outperform substantially larger models without them. We also find that evolved skills transfer effectively across models and model families, and skills evolved by other models can outperform self-evolved skills. Finally, our ablation studies confirm that persistent knowledge accumulation in the wiki is critical for effective skill evolution. These results demonstrate the benefits of systematically accumulating and refining agent experience for developing reusable and transferable skills.

## Reference

- **ArXiv ID**: 2608.27454v1
- **Link**: [2608.27454v1](https://arxiv.org/abs/2608.27454v1)
- **Authors**: Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng
- **Published**: 08/27/2026

## Categories

cs.AI, cs.CL
