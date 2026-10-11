---
title: "Dex-One2Many: Learning Dexterous Manipulation from a Single Human Demonstration"
date: "10/08/2026"
authors: "Jusuk Lee, Sungha Kim, Yeonsoo Park"
arxivUrl: "https://arxiv.org/abs/2610.12470v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

While learning dexterous manipulation from a single human video offers a promising alternative to costly robot demonstrations, many recent methods predominantly imitate demonstrated motions. Such strict motion matching often limits generalization to initial object poses, goal poses, and grasps not shown in the video. Alternatively, discovering a policy via reinforcement learning (RL) allows for broad generalization, but without prior guidance, it struggles with high-dimensional exploration in complex, multi-stage tasks. To address these coupled generalization and exploration challenges, we present Dex-One2Many, a real-to-sim-to-real framework that learns a generalizable dexterous manipulation policy from a single human video. Our key insight is to abstract the video into sequential scene graphs that guide RL, enabling efficient exploration while preserving broad generalizability. The graphs serve as generative constraints for sampling diverse reset states and provide dense rewards for each stage. Because the graphs constrain relations rather than exact poses, these reset states cover object poses and grasps beyond the video, while initializing each stage from them with dense rewards keeps exploration short and guided. Trained entirely in simulation, Dex-One2Many transfers zero-shot to a real multi-fingered hand. Across five tool-use and manipulation tasks, Dex-One2Many exceeds baselines by 6.5% in seen configurations, while its robust generalization widens this gap to 71% in unseen scenarios.

## Reference

- **ArXiv ID**: 2610.12470v1
- **Link**: [2610.12470v1](https://arxiv.org/abs/2610.12470v1)
- **Authors**: Jusuk Lee, Sungha Kim, Yeonsoo Park
- **Published**: 10/08/2026

## Categories

cs.RO, cs.CV
