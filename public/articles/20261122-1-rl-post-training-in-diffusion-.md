---
title: "RL Post-Training in Diffusion Transformers Is Activation Steering"
date: "11/19/2026"
authors: "Tuna Han Salih Meral, Kaan Oktay, Alec Helbling"
arxivUrl: "https://arxiv.org/abs/2611.26627v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Reinforcement learning (RL) post-training substantially improves the visual quality, text rendering, and compositional accuracy of diffusion transformers. Because capabilities such as rendering requested text or composing multiple objects are inherently prompt-dependent, a natural hypothesis is that improving them requires learning complex, input-dependent transformations. To isolate how much of these gains an input-independent shift explains, we probe each RL-tuned model with a deliberately simple parameterization: a fixed set of steering vectors added to the block outputs of the frozen base model. On SD3.5-M, these vectors hold 65x fewer parameters than the RL-tuned LoRA (0.29M against 18.8M). We fit them to match the velocity predictions of public RL-tuned checkpoints, with no reward in the objective. Although the vectors are identical for every prompt, token, and sampling seed, they recover 90.0-96.3% of the reward gains of six RL-tuned image models, and 89.8% and 111.9% on two RL-tuned video models. Initialized at zero and trained with online RL, the vectors alone exceed the reward gains of weight-based RL on text rendering (OCR) and human preference (PickScore) on SD3.5-M. A constant shift thus suffices for most of the gain of policy-gradient RL post-training: without new input-dependent transformations, it steers the pretrained generator toward what it can already compute.

## Reference

- **ArXiv ID**: 2611.26627v1
- **Link**: [2611.26627v1](https://arxiv.org/abs/2611.26627v1)
- **Authors**: Tuna Han Salih Meral, Kaan Oktay, Alec Helbling
- **Published**: 11/19/2026

## Categories

cs.CV, cs.LG
