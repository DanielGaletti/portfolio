---
title: "Alignment Is All You Need For X-to-4D Generation"
date: "07/02/2026"
authors: "Qiaowei Miao, Kehan Li, Yawei Luo"
arxivUrl: "https://arxiv.org/abs/2607.02516v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Generative diffusion models excel at synthesizing high-quality images, videos, and 3D content under multimodal control. However, arbitrary user-defined modality-to-4D (X-to-4D) generation remains challenging due to the high cost of constructing diverse datasets and the limited scalability of existing methods. This paper presents Align4D, a flexible framework that translates any-modal input into coherent video-3D pairs, using video to guide 4D motion and 3D data to shape 4D geometry. Align4D introduces three key techniques: (1) Object Distance Alignment, which searches Video-Aligned and Multiview-Aligned Object Distances (VAOD/MAOD), respectively, to reconcile 4D renderings with video and the priors of multiview diffusion models; (2) Motion-Geometry Joint Alignment, which constrains known and unknown views through synchronized video and 3D inputs, ensuring consistent 4D generation; and (3) Asynchronous Optimization, which decouples Gaussian attribute and deformation network training to enhance motion and geometry fidelity. We further propose the X4D dataset, which integrates prompt, image, video, and 3D data for benchmarking. Experiments on X4D and Consistent4D demonstrate that Align4D achieves state-of-the-art quality and consistency in X-to-4D generation. Project page: https://miaoqiaowei.github.io/Align4D/.

## Reference

- **ArXiv ID**: 2607.02516v1
- **Link**: [2607.02516v1](https://arxiv.org/abs/2607.02516v1)
- **Authors**: Qiaowei Miao, Kehan Li, Yawei Luo
- **Published**: 07/02/2026

## Categories

cs.CV
