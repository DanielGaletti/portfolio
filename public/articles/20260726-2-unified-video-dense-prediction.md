---
title: "Unified Video Dense Prediction from Disjoint Data"
date: "07/23/2026"
authors: "Yihong Sun, Seoung Wug Oh, Jiahui Huang"
arxivUrl: "https://arxiv.org/abs/2607.21592v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Scene understanding requires simultaneous prediction about geometry, appearance, and semantics. However, existing task-specific annotations are fragmented across incompatible, domain-specific datasets. Current unified systems circumvent this by restricting training to fully co-annotated data, or by incurring the large computational cost of pseudo-labeling. To mitigate this, we introduce UniD, a unified video model that jointly predicts eight dense scene properties-depth, surface normals, semantic segmentation, boundaries, human parts, albedo, shading, and materials-all learned from disjoint, domain-specific datasets. We propose a simple yet effective distillation step in which per-task experts supervise a unified backbone through lightweight task projectors, eliminating the need for annotation overlap or pseudo-labeling. Our key insight is that the strong visual priors of a pretrained diffusion model are sufficient to bridge the domain gaps introduced by disjoint training sources, enabling robust generalization to scene-task combinations never seen during training. UniD achieves competitive performance against per-task specialists and multi-task baselines, with strong generalization to out-of-distribution scenarios and enhanced temporal and cross-task consistency. Code and video results are available at https://unid-video.github.io/.

## Reference

- **ArXiv ID**: 2607.21592v1
- **Link**: [2607.21592v1](https://arxiv.org/abs/2607.21592v1)
- **Authors**: Yihong Sun, Seoung Wug Oh, Jiahui Huang
- **Published**: 07/23/2026

## Categories

cs.CV
