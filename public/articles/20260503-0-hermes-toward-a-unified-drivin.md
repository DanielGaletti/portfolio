---
title: "HERMES++: Toward a Unified Driving World Model for 3D Scene Understanding and Generation"
date: "04/30/2026"
authors: "Xin Zhou, Dingkang Liang, Xiwu Chen"
arxivUrl: "https://arxiv.org/abs/2604.28196v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Driving world models serve as a pivotal technology for autonomous driving by simulating environmental dynamics. However, existing approaches predominantly focus on future scene generation, often overlooking comprehensive 3D scene understanding. Conversely, while Large Language Models (LLMs) demonstrate impressive reasoning capabilities, they lack the capacity to predict future geometric evolution, creating a significant disparity between semantic interpretation and physical simulation. To bridge this gap, we propose HERMES++, a unified driving world model that integrates 3D scene understanding and future geometry prediction within a single framework. Our approach addresses the distinct requirements of these tasks through synergistic designs. First, a BEV representation consolidates multi-view spatial information into a structure compatible with LLMs. Second, we introduce LLM-enhanced world queries to facilitate knowledge transfer from the understanding branch. Third, a Current-to-Future Link is designed to bridge the temporal gap, conditioning geometric evolution on semantic context. Finally, to enforce structural integrity, we employ a Joint Geometric Optimization strategy that integrates explicit geometric constraints with implicit latent regularization to align internal representations with geometry-aware priors. Extensive evaluations on multiple benchmarks validate the effectiveness of our method. HERMES++ achieves strong performance, outperforming specialist approaches in both future point cloud prediction and 3D scene understanding tasks. The model and code will be publicly released at https://github.com/H-EmbodVis/HERMESV2.

## Reference

- **ArXiv ID**: 2604.28196v1
- **Link**: [2604.28196v1](https://arxiv.org/abs/2604.28196v1)
- **Authors**: Xin Zhou, Dingkang Liang, Xiwu Chen
- **Published**: 04/30/2026

## Categories

cs.CV
