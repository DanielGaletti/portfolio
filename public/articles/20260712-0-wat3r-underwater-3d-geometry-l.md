---
title: "Wat3R: Underwater 3D Geometry Learning without Annotations"
date: "07/09/2026"
authors: "Jiangwei Ren, Xingyu Jiang, Zijie Song"
arxivUrl: "https://arxiv.org/abs/2607.08772v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Estimating 3D geometry in underwater environments presents unique challenges due to light attenuation, scattering, and the absence of large-scale, high-quality 3D annotations. Pioneering methods rely on massive dense annotations that are impractical in underwater settings. In this paper, we propose Wat3R, a cross-domain semi-supervised learning framework designed to adapt feed-forward 3D reconstruction models from air to underwater scenes. Uniquely, our method eliminates the need for any annotated underwater data following a teacher-student architecture, that learns robust geometry representations merely on abundant unlabeled real underwater video footage. We also design a cross-view consistency loss that leverages geometric cues from other views to compensate for the information degradation in the current view caused by water attenuation and scattering. Furthermore, considering the lack of comprehensive evaluation benchmarks, we construct Water3D, a diverse dataset covering various water bodies and underwater scenarios, designed for geometric task evaluation. Experimental results demonstrate that Wat3R outperforms current state-of-the-art methods in underwater multi-view depth estimation and point cloud reconstruction. The dataset and code are available at https://github.com/LSXI7/Wat3R .

## Reference

- **ArXiv ID**: 2607.08772v1
- **Link**: [2607.08772v1](https://arxiv.org/abs/2607.08772v1)
- **Authors**: Jiangwei Ren, Xingyu Jiang, Zijie Song
- **Published**: 07/09/2026

## Categories

cs.CV
