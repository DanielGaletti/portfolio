---
title: "LongCoT: Benchmarking Long-Horizon Chain-of-Thought Reasoning"
date: "04/15/2026"
authors: "Sumeet Ramesh Motwani, Daniel Nichols, Charles London"
arxivUrl: "https://arxiv.org/abs/2604.14140v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

As language models are increasingly deployed for complex autonomous tasks, their ability to reason accurately over longer horizons becomes critical. The authors introduce LongCoT, a scalable benchmark of 2,500 expert-designed problems spanning chemistry, mathematics, computer science, chess, and logic — designed to isolate and directly measure the long-horizon chain-of-thought (CoT) reasoning capabilities of frontier models.

Problems consist of a short input with a verifiable answer; solving them requires navigating a graph of interdependent steps spanning tens to hundreds of thousands of reasoning tokens. Each local step is individually tractable for frontier models, so failures specifically reflect long-horizon reasoning limitations rather than local comprehension gaps.

At release, the best models achieve under 10% accuracy (GPT 5.2: 9.8%; Gemini 3 Pro: 6.1%) on LongCoT, revealing a substantial gap in current capabilities. Overall, LongCoT provides a rigorous and scalable measure of long-horizon reasoning, tracking how reliably frontier models can chain thought over extended periods.

## Reference

- **ArXiv ID**: 2604.14140v1
- **Link**: [2604.14140v1](https://arxiv.org/abs/2604.14140v1)
- **Authors**: Sumeet Ramesh Motwani, Daniel Nichols, Charles London
- **Published**: 04/15/2026

## Categories

cs.LG, cs.AI
