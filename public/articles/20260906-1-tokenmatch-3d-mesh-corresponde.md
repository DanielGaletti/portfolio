---
title: "TokenMatch: 3D Mesh Correspondence Transformer with Curvature-Guided Tokenisation"
date: "09/03/2026"
authors: "Adeela Islam, Zorah Lähner, Vittorio Murino"
arxivUrl: "https://arxiv.org/abs/2609.04202v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

While data-driven 3D shape correspondence estimation has recently seen substantial progress, robust matching under partial observations and strong non-isometric deformations remains challenging. Existing learning-based approaches often rely on hand-crafted descriptors or template-based representations, whereas recent generative models over functional maps suffer from high inference cost, limited interpretability, and poor generalisation to partial shapes. In response to these limitations, this paper introduces TokenMatch, a new transformer-based unified model for estimating 3D shape correspondences. Our feed-forward approach trained exclusively on BeCoS, a challenging non-isometric partial-to-partial shape-matching dataset, can generalise to matching full shapes without retraining or fine-tuning. TokenMatch uses self- and cross-attention mechanisms to efficiently learn patch-level and point-level relations as well as dense correspondences between shape pairs. Our core insight is that meshes can be adaptively tokenised into patches using shape curvature guidance, enabling effective learning of shape-specific geometric descriptors for correspondence estimation. We evaluate TokenMatch on standard benchmarks for partial and full shape matching, including CP2P, PSMAL, BeCoS, FAUST, SCAPE, and SHREC'19. Our method achieves consistently high performance, in most cases outperforming existing methods for partial and full shape matching in the mean geodesic error and intersection-over-union metrics, while also running faster at sub-second inference speeds.

## Reference

- **ArXiv ID**: 2609.04202v1
- **Link**: [2609.04202v1](https://arxiv.org/abs/2609.04202v1)
- **Authors**: Adeela Islam, Zorah Lähner, Vittorio Murino
- **Published**: 09/03/2026

## Categories

cs.CV
