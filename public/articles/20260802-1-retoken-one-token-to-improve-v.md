---
title: "ReToken: One Token to Improve Vision-Language Models for Visual Retrieval"
date: "07/30/2026"
authors: "Yao Xiao, Reuben Tan, Zhen Zhu"
arxivUrl: "https://arxiv.org/abs/2607.28627v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Long visual context poses a challenge for vision-language models: performance degrades as the number of distractors grows, and processing all tokens at once is computationally infeasible under GPU memory constraints. We present ReToken, a single learnable embedding trained as an explicit retrieval target that selects a sparse set of query-relevant visual tokens from a pre-filled visual KV cache. Trained on only a small image-QA dataset, ReToken yields consistent gains across image and video benchmarks: on Visual Haystacks it improves Qwen3VL-8B by 13.4 points and InternVL3.5 by 12.4 points (>20% relative), and on LVBench it transfers zero-shot to long video for an 8.0-point gain with Qwen3VL-8B. Thanks to its lightweight design, both training and long-video inference fit on a single H100. Code is available at: https://github.com/avaxiao/ReToken

## Reference

- **ArXiv ID**: 2607.28627v1
- **Link**: [2607.28627v1](https://arxiv.org/abs/2607.28627v1)
- **Authors**: Yao Xiao, Reuben Tan, Zhen Zhu
- **Published**: 07/30/2026

## Categories

cs.CV, cs.AI, cs.LG
