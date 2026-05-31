---
title: "VideoMLA: Low-Rank Latent KV Cache for Minute-Scale Autoregressive Video Diffusion"
date: "05/28/2026"
authors: "Hidir Yesiltepe, Jiazhen Hu, Tuna Han Salih Meral"
arxivUrl: "https://arxiv.org/abs/2605.30351v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Long-rollout causal video diffusion has converged on a fixed-size sliding-window KV cache, with recent progress innovating within this layout by changing which tokens occupy the window or how their positions are encoded. The per-head KV layout itself, a dominant contributor to streaming memory and latency, has been mostly left unchanged. In this paper, we present the first study of Multi-Head Latent Attention (MLA) in video diffusion. VideoMLA replaces per-head keys and values with a shared low-rank content latent and a shared decoupled 3D-RoPE positional key, reducing per-token KV memory by 92.7% at every cached layer. We further investigate why MLA succeeds in video diffusion even though the spectral assumption often used to motivate it in language models does not hold: pretrained video attention is not low-rank, with 99%-energy effective rank far above any practical latent dimension. VideoMLA retains quality at compression ratios where direct spectral approximation would predict large reconstruction error. We show that the MLA bottleneck, rather than the pretrained spectrum, determines the effective rank: both spectral and random initialization occupy nearly the full rank budget from initialization, and training preserves this budget while adapting within it. On VBench, VideoMLA matches short-horizon streaming video diffusion baselines, achieves the best overall score at long horizons among evaluated methods, and improves throughput by 1.23x on a single B200.

## Reference

- **ArXiv ID**: 2605.30351v1
- **Link**: [2605.30351v1](https://arxiv.org/abs/2605.30351v1)
- **Authors**: Hidir Yesiltepe, Jiazhen Hu, Tuna Han Salih Meral
- **Published**: 05/28/2026

## Categories

cs.CV, cs.AI
