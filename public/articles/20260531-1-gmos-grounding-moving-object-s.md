---
title: "GMOS: Grounding Moving Object Segmentation in 3D Space and Time"
date: "05/28/2026"
authors: "Junyu Xie, Tengda Han, Weidi Xie"
arxivUrl: "https://arxiv.org/abs/2605.30352v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Moving Object Segmentation (MOS) aims to discover, segment, and track objects that move independently of the camera. Current MOS methods, however, exhibit two fundamental limitations: they rely on pre-computed 2D auxiliary modalities such as optical flow or point trajectories that lack 3D geometric information, and they treat motion as a sequence-level attribute, overlooking the instantaneous motion state of each object. We address both by grounding MOS in 3D space and time, and propose GMOS, a framework that operates directly on RGB video to produce 3D-aware, temporally fine-grained segmentation of multiple moving objects, alongside a foreground--background variant GMOS-S for faster deployment. To support training and evaluation in this regime, we curate GMOS-2K, a dataset of 2,210 real-world videos with per-object temporal motion annotations drawn from five established Video Object Segmentation (VOS) benchmarks, and formalise MOS-I ("I" for instantaneous), a temporally fine-grained evaluation protocol with three complementary metrics. GMOS achieves state-of-the-art results across MOS, MOS-I, and Unsupervised VOS benchmarks, while running significantly faster than prior multi-object MOS methods and supporting online inference for streaming deployment.

## Reference

- **ArXiv ID**: 2605.30352v1
- **Link**: [2605.30352v1](https://arxiv.org/abs/2605.30352v1)
- **Authors**: Junyu Xie, Tengda Han, Weidi Xie
- **Published**: 05/28/2026

## Categories

cs.CV
