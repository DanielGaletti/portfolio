---
title: "JanusMesh: Fast and Zero-Shot 3D Visual Illusion Generation via Cross-Space Denoising"
date: "06/18/2026"
authors: "Siang-Ling Zhang, Huai-Hsun Cheng, Tsung-Ju Yang"
arxivUrl: "https://arxiv.org/abs/2606.20563v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Creating 3D visual illusions, a single 3D mesh that reveals entirely different semantics from various viewing angles, is a fascinating but tough challenge. Existing optimization-based methods are slow and can produce oversaturated colors. In contrast, naive stitching approaches fail to produce geometrically coherent objects. This results in visible unnatural seams and semantic leaks. In this paper, we present a fast and training-free framework for generating text-driven 3D visual illusions. Our approach decouples the generation into two stages. First, we propose a cross-space dual-branch denoising process. This process dynamically decodes 3D latents into voxel space for CLIP-guided orientation alignment and Signed Distance Field (SDF) blending, which ensures seamless geometric fusion. Second, we introduce a view-conditioned texture synthesis module that projects and aggregates view-specific 2D diffusion priors onto the fused geometry. Extensive experiments demonstrate that our method generates highly realistic, dual-semantic 3D illusions in just 3-5 minutes. It significantly outperforms existing methods in geometric integrity, semantic recognizability, and efficiency. Project page: https://siang1105.github.io/JanusMesh.github.io/

## Reference

- **ArXiv ID**: 2606.20563v1
- **Link**: [2606.20563v1](https://arxiv.org/abs/2606.20563v1)
- **Authors**: Siang-Ling Zhang, Huai-Hsun Cheng, Tsung-Ju Yang
- **Published**: 06/18/2026

## Categories

cs.CV
