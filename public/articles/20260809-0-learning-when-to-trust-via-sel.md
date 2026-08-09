---
title: "Learning When to Trust via Selective Context Preference Optimization"
date: "08/06/2026"
authors: "Xian Sun, Wei Chow, Yingshuo Wang"
arxivUrl: "https://arxiv.org/abs/2608.06377v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Language models increasingly condition their answers on external signals, and a single misleading one can turn a correct answer wrong. The obvious remedy, training models to resist such signals, hides a failure mode: a model that ignores all context looks robust yet is useless when the context is worth trusting. We recast the problem as selective trust and introduce MIST, a human-annotated benchmark that renders each reasoning item under four matched conditions (clean, misleading, correct-context, and irrelevant-context), together with SC2W, a paired metric counting how often a misleading signal flips a clean-correct answer to wrong. Across a comprehensive benchmark study, we observe that such a susceptibility is universal. We then propose SCOPE, which mines clean-correct/misleading-wrong failures and optimizes a standard Direct Preference Optimization (DPO) objective over matched preference pairs balanced equally across all four conditions, rather than over misleading items alone. Our approach substantially reduces SC2W on popular open-sourced models while preserving accuracy when the added context is clean, correct, or irrelevant. With this work, we argue that models should be judged on selective trust, not on resistance alone.

## Reference

- **ArXiv ID**: 2608.06377v1
- **Link**: [2608.06377v1](https://arxiv.org/abs/2608.06377v1)
- **Authors**: Xian Sun, Wei Chow, Yingshuo Wang
- **Published**: 08/06/2026

## Categories

cs.CL, cs.AI, cs.LG
