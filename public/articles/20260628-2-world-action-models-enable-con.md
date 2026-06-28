---
title: "World Action Models Enable Continual Imitation Learning with Recurrent Generative Replays"
date: "06/25/2026"
authors: "Manish Kumar Govind, Dominick Reilly, Smit Patel"
arxivUrl: "https://arxiv.org/abs/2606.27374v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Going beyond predicting robot actions, World Action Models (WAMs) can also generate future visual observations. We build on this generative capability to propose Recurrent Generative Replay (REGEN), a continual imitation learning framework that synthesizes pseudo-replay trajectories, enabling a robot policy to rehearse previously learned tasks without storing their original human demonstrations. During continual adaptation, REGEN recursively queries the WAM to synthesize pseudo-replay trajectories conditioned only on prior task instructions and current-task observations. Experiments in both simulation and real-world manipulation settings show that REGEN reduces catastrophic forgetting by up to $50\%$ relative to sequential fine-tuning, while approaching the performance of privileged experience replay methods that require access to real replay data. Finally, we analyze the factors limiting generated replay, identifying long-horizon visual degradation and action-observation inconsistency as the primary bottlenecks. Our results establish WAMs as a promising foundation for continual robot learning without stored demonstrations.

## Reference

- **ArXiv ID**: 2606.27374v1
- **Link**: [2606.27374v1](https://arxiv.org/abs/2606.27374v1)
- **Authors**: Manish Kumar Govind, Dominick Reilly, Smit Patel
- **Published**: 06/25/2026

## Categories

cs.RO, cs.CV
