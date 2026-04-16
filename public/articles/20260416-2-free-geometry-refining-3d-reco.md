---
title: "Free Geometry: Refining 3D Reconstruction from Longer Versions of Itself"
date: "04/15/2026"
authors: "Yuhang Dai, Xingyi Yang"
arxivUrl: "https://arxiv.org/abs/2604.14048v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

The paper proposes a framework called Free Geometry, which enables feed-forward 3D reconstruction models to adapt to test scenes without requiring additional 3D ground truth. These models typically perform inference in a zero-shot manner, resulting in potentially erroneous reconstructions, especially under occlusions, specularities, and ambiguous cues. Free Geometry leverages the property that when a model receives more views, it produces more reliable and view-consistent reconstructions.

To achieve this, the framework constructs a self-supervised task by masking a subset of frames from a testing sequence. This allows the model to enforce cross-view feature consistency between representations from full and partial observations, while maintaining the pairwise relations implied by the held-out frames. This self-supervision enables fast recalibration of the model via lightweight LoRA (Low-Rank Adaptation) updates, which can be completed in less than 2 minutes per dataset on a single GPU.

The proposed approach, Free Geometry, is demonstrated to consistently improve state-of-the-art foundation models, including Depth Anything 3 and VGGT, across 4 benchmark datasets. The results show an average improvement of 3.73% in camera pose accuracy and 2.88% in point map prediction. This suggests that Free Geometry is an effective method for refining 3D reconstruction models, enabling them to adapt to test scenes and produce more accurate reconstructions.

The key advantage of Free Geometry lies in its ability to enable self-evolution of feed-forward 3D reconstruction models at test time without requiring additional 3D ground truth. This is achieved through a self-supervised learning mechanism that leverages the property of view-consistent reconstructions when more views are available. The approach is efficient, requiring only lightweight LoRA updates, and demonstrates significant improvements in camera pose accuracy and point map prediction.

## Reference

- **ArXiv ID**: 2604.14048v1
- **Link**: [2604.14048v1](https://arxiv.org/abs/2604.14048v1)
- **Authors**: Yuhang Dai, Xingyi Yang
- **Published**: 04/15/2026

## Categories

cs.CV
