---
title: "WithEveryone: Unified Planning and Identity Grounding for Group Image Generation"
date: "08/20/2026"
authors: "Hengyuan Xu, Qixun Wang, Yiji Cheng"
arxivUrl: "https://arxiv.org/abs/2608.20336v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Identity-preserving image generation becomes increasingly unreliable when a scene must contain many specified people. Beyond retaining each identity, the model must bind every reference to a distinct person and location, while training-time identity losses must establish correspondence among several noisy predicted faces. We introduce WithEveryone, a unified framework for generating group images up to ten reference identities. WithEveryone injects each selected identity as an addressed token, predicts a structured identity--layout plan, and renders the plan as a visual condition. Its key objective, Layout-Grounded ID Loss, uses annotated face regions to supervise the intended identities directly, avoiding unstable embedding-based face matching; ID Representation Forcing additionally trains a prediction for each identity before image synthesis. On an identity-disjoint benchmark, WithEveryone achieves the highest target-context identity similarity, improving face similarity from 0.462 for GPT-Image-2 to 0.499, while reducing copy-paste artifacts from 0.169 to 0.055. It further covers 97.3\% of the requested identities with a duplicate rate of only 2.8\%. These results show that explicit identity--layout grounding enables identity-preserving generation to scale to larger groups without relying on direct reference-face copying.

## Reference

- **ArXiv ID**: 2608.20336v1
- **Link**: [2608.20336v1](https://arxiv.org/abs/2608.20336v1)
- **Authors**: Hengyuan Xu, Qixun Wang, Yiji Cheng
- **Published**: 08/20/2026

## Categories

cs.CV
