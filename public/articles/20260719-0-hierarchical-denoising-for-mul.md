---
title: "Hierarchical Denoising For Multi-Step Visual Reasoning"
date: "07/16/2026"
authors: "Zezhong Qian, Xiaowei Chi, Chak-Wing Mak"
arxivUrl: "https://arxiv.org/abs/2607.15278v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Video models are evolving into vision foundation models, yet they still lack human-like multi-step reasoning. Streaming autoregressive diffusion models are efficient but limited in reasoning, while bidirectional diffusion enables global revision with high inference costs due to dense frame-level denoising. Both paradigms struggle to achieve logical consistency and low-latency streaming for complex reasoning tasks. We propose HDR (Hierarchical Denoising for Visual Reasoning), a unified framework that integrates hierarchical latents into causal video generation for multi-step reasoning. HDR organizes video latents into a tree-structured hierarchy, enabling coarse-to-fine reasoning before streaming output. Coarse denoising layers preserve uncertain hypotheses for global planning, while finer layers progressively refine them into concrete visual states. A sparse hierarchical attention pattern (SHAP) further reduces temporal attention costs. We introduce a level-stratified multi-step video reasoning benchmark with out-of-distribution cases, covering six tasks: maze navigation, Tower of Hanoi, one-line drawing, sliding puzzle, Sokoban, and water pouring. Compared with streaming autoregressive diffusion baselines, HDR improves success from 34.22 to 60.29 (76.2% relative gain) and increases average progress from 76.00 to 89.56, demonstrating more consistent reasoning trajectories. HDR maintains low-latency streaming at 0.70 seconds per latent, achieving 54.2 times faster inference than bidirectional diffusion. It also retains 82.9% of full-data performance with only 2% training data, compared with 52.0% for bidirectional diffusion. Real-world robot experiments further demonstrate HDR's potential for physical interaction and world modeling. Project demo: https://hierarchical-diffusion-reasoning.github.io/.

## Reference

- **ArXiv ID**: 2607.15278v1
- **Link**: [2607.15278v1](https://arxiv.org/abs/2607.15278v1)
- **Authors**: Zezhong Qian, Xiaowei Chi, Chak-Wing Mak
- **Published**: 07/16/2026

## Categories

cs.CV
