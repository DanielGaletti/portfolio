---
title: "MotiMotion: Motion-Controlled Video Generation with Visual Reasoning"
date: "05/21/2026"
authors: "Lee Hsin-Ying, Hanwen Jiang, Yiqun Mei"
arxivUrl: "https://arxiv.org/abs/2605.22818v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Current motion-controlled image-to-video generation models rigidly follow user-provided trajectories that are often sparse, imprecise, and causally incomplete. Such reliance often yields unnatural or implausible outcomes, especially by missing secondary causal consequences. To address this, we introduce MotiMotion, a novel framework that reformulates motion control as a reasoning-then-generation problem. To encourage causally grounded and commonsense-consistent interactions, we leverage a training-free vision-language reasoner to refine image-space coordinates of primary trajectories and to hallucinate plausible secondary motions. To further improve motion naturalness, we propose a confidence-aware control scheme that modulates guidance strength, enabling the model to closely follow high-confidence plans while correcting artifacts under low-confidence inputs with its internal generative priors. To support systematic evaluation, we curate a new image-to-video benchmark, MotiBench, consisting of interaction-centric scenes where new events are triggered by motion. Both VLM-based evaluation and a human study on MotiBench demonstrate that MotiMotion produces videos with more plausible object behaviors and interaction, and is preferred over existing approaches.

## Reference

- **ArXiv ID**: 2605.22818v1
- **Link**: [2605.22818v1](https://arxiv.org/abs/2605.22818v1)
- **Authors**: Lee Hsin-Ying, Hanwen Jiang, Yiqun Mei
- **Published**: 05/21/2026

## Categories

cs.CV
