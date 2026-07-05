---
title: "PointDiT: Pixel-Space Diffusion for Monocular Geometry Estimation"
date: "07/02/2026"
authors: "Haofei Xu, Rundi Wu, Philipp Henzler"
arxivUrl: "https://arxiv.org/abs/2607.02515v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

State-of-the-art single-image 3D reconstruction methods often rely on complex hybrid architectures and loss functions, or compress geometry into latent spaces in order to leverage pre-trained latent diffusion models. In this work, we show that such architectural overhead and intricate loss formulations are unnecessary. We introduce a minimalist pixel-space Diffusion Transformer, built on a plain ViT, that operates directly on raw 3D point map patches and is conditioned on image tokens from a pre-trained DINOv3. Unlike existing latent diffusion approaches, we train our diffusion backbone entirely from scratch, eliminating the need for point map tokenizers. Despite its simplicity, our approach surpasses complex latent-based diffusion models while remaining significantly simpler than hybrid alternatives. Notably, it produces sharper geometric structure and is more robust in highly ambiguous regions, such as transparent objects.

## Reference

- **ArXiv ID**: 2607.02515v1
- **Link**: [2607.02515v1](https://arxiv.org/abs/2607.02515v1)
- **Authors**: Haofei Xu, Rundi Wu, Philipp Henzler
- **Published**: 07/02/2026

## Categories

cs.CV
