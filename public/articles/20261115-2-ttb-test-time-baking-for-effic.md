---
title: "TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models"
date: "11/12/2026"
authors: "Chin-Yang Lin, Ryo Hachiuma, Jaesung Choe"
arxivUrl: "https://arxiv.org/abs/2611.17331v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Decoder-only Large View Synthesis Models (LVSMs) with KV-cache have recently achieved state-of-the-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test-Time Training (TTT) layers save computation but sacrifice quality. We propose Test-Time Baking (TTB), a strategy that learns to bake global scene information from cross-view attention into a lightweight MLP, enabling fast and high-fidelity novel-view decoding. The first key is to repurpose the fast-weight MLP of TTT to learn the cross-view attention mapping explicitly from its input-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality. The second key addresses a modality misalignment between context prefilling and novel-view rendering: we disentangle context tokens into camera-only context rendering tokens to serve as TTB input, and context ground-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel-view processing. Our method achieves up to **23x** rendering speedup with quality on par with the state-of-the-art across several benchmarks. Project page: https://test-time-baking.github.io

## Reference

- **ArXiv ID**: 2611.17331v1
- **Link**: [2611.17331v1](https://arxiv.org/abs/2611.17331v1)
- **Authors**: Chin-Yang Lin, Ryo Hachiuma, Jaesung Choe
- **Published**: 11/12/2026

## Categories

cs.CV
