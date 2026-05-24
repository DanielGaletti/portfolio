---
title: "Cambrian-P: Pose-Grounded Video Understanding"
date: "05/21/2026"
authors: "Jihan Yang, Zifan Zhao, Xichen Pan"
arxivUrl: "https://arxiv.org/abs/2605.22819v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Camera pose matters. The position and orientation of each viewpoint define a shared spatial coordinate frame that relates observations across video frames. Yet this signal is largely absent from multimodal LLMs (MLLMs) for video understanding, which process frames as isolated 2D snapshots, instead of the persistent scene humans perceive. We revisit pose as a lightweight supervisory signal and introduce Cambrian-P, a video MLLM augmented with per-frame learnable camera tokens and a pose regression head. With a carefully designed sampling scheme, the model achieves substantial gains of 4.5-6.5% on spatial reasoning benchmarks such as VSI-Bench, generalizes across eight additional spatial and general video QA benchmarks, and, as a byproduct, achieves state of the art streaming pose estimation on ScanNet. Surprisingly, training on pseudo-annotated poses from in-the-wild video further improves general video QA benchmarks, showing pose helps beyond spatial reasoning. Together, these results position camera pose as a fundamental signal for video models that reason about the physical world.

## Reference

- **ArXiv ID**: 2605.22819v1
- **Link**: [2605.22819v1](https://arxiv.org/abs/2605.22819v1)
- **Authors**: Jihan Yang, Zifan Zhao, Xichen Pan
- **Published**: 05/21/2026

## Categories

cs.CV
