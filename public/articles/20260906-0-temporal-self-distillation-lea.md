---
title: "Temporal Self-Distillation: Learning Visual State Tracking in Videos Without Supervision"
date: "09/03/2026"
authors: "Shravan Venkatraman, Wenshuai Zhao, Mohammad Hassan Vali"
arxivUrl: "https://arxiv.org/abs/2609.04203v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

We introduce S$^3$T (Self-Supervised Self-Distillation over Time), which, to the best of our knowledge, is the first fully self-contained framework for continuous video state tracking. Our method treats temporal sampling density as privileged information, based on the hypothesis that a denser view of the same clip recovers the running state more accurately. This view serves as the teacher, while a sparse-view student with the same weights learns to match its next-token distribution. The model generates its own target, so training requires no labels, separate teacher, or reward signal, and adds no inference cost. On LLaVA-OneVision-2-8B, S$^3$T improves VSTAT accuracy by $+1.74$ as a single model, $+2.38$ with souping, and $+2.70$ with additional vision-encoder adaptation, while prior self-evolving methods leave state tracking largely unchanged. The capability learned from unlabeled synthetic clips transfers to real videos, improving performance by $+7.95$ on VSTAT-YouTube state-tracking questions and $+4.50$ on MVBench Action Count.

## Reference

- **ArXiv ID**: 2609.04203v1
- **Link**: [2609.04203v1](https://arxiv.org/abs/2609.04203v1)
- **Authors**: Shravan Venkatraman, Wenshuai Zhao, Mohammad Hassan Vali
- **Published**: 09/03/2026

## Categories

cs.CV
