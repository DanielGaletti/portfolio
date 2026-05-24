---
title: "Which Way Did It Move? Diagnosing and Overcoming Directional Motion Blindness in Video-LLMs"
date: "05/21/2026"
authors: "Jongseo Lee, Hyuntak Lee, Sunghun Kim"
arxivUrl: "https://arxiv.org/abs/2605.22823v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Video Large Language Models (Video-LLMs) have made rapid progress on temporal video understanding, yet many fail at a basic perceptual primitive: signed image-plane motion direction. On simple videos of a single object moving left, right, up, or down, most Video-LLMs perform near chance, with above-chance cases largely attributable to prediction biases rather than genuine direction understanding. We call this failure directional motion blindness. We localize the failure by tracing motion direction information through the Video-LLM pipeline. Motion direction remains linearly accessible from the vision encoder, projector, and LLM hidden states, but the readout fails to bind this signal to the correct verbal answer option, revealing a direction binding gap. Although synthetic motion direction instruction tuning reduces this gap on the source domain, motion direction concept vector analysis shows that visual complexity weakens the signal magnitude and limits out-of-domain generalization. We introduce MoDirect, a dataset family for motion direction instruction tuning and evaluation, and DeltaDirect, a diagnosis-driven, projector-level objective that predicts normalized 2-D motion vectors from adjacent-frame feature deltas. On MoDirect-SynBench, instruction tuning with DeltaDirect improves motion direction accuracy from 25.9% to 85.4%. On MoDirect-RealBench, DeltaDirect improves real-world motion direction accuracy by 21.9 points over the vanilla baseline without real-world tuning data, while preserving standard video-understanding performance. Code: https://github.com/KHU-VLL/DeltaDirect

## Reference

- **ArXiv ID**: 2605.22823v1
- **Link**: [2605.22823v1](https://arxiv.org/abs/2605.22823v1)
- **Authors**: Jongseo Lee, Hyuntak Lee, Sunghun Kim
- **Published**: 05/21/2026

## Categories

cs.CV
