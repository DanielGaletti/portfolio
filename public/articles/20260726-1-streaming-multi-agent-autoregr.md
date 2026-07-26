---
title: "Streaming Multi-Agent Autoregressive Diffusion Model with World State Registers"
date: "07/23/2026"
authors: "Sicheng Mo, Yuheng Li, Ziyang Leng"
arxivUrl: "https://arxiv.org/abs/2607.21594v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Multi-agent interactive world models should not only generate consistent observations, but also maintain world states that persist across agents and evolve across views. Existing autoregressive video diffusion pipelines carry forward observation history as conditioning context, which makes shared state difficult to maintain in multi-agent and multi-view settings. We present WorldWeaver (W^2), a streaming multi-agent video diffusion model that augments rollout with cross-agent world state registers: learnable tokens that store shared world information, track individual agent status, and are dynamically updated after each generated chunk. We ground these registers with supervision signals spanning individual agent status, global state views including bird's-eye views, and scene text. We further improve the architecture with a Mixture-of-Transformers design that uses separate weights for world state modeling and visual frame modeling. Extensive experiments in two-agent Minecraft video generation show that explicit world-state modeling improves logical consistency and generation quality.

## Reference

- **ArXiv ID**: 2607.21594v1
- **Link**: [2607.21594v1](https://arxiv.org/abs/2607.21594v1)
- **Authors**: Sicheng Mo, Yuheng Li, Ziyang Leng
- **Published**: 07/23/2026

## Categories

cs.CV
