---
title: "Sensorimotor Alignment: A Platonic Proxy for Embodied Policy Success"
date: "10/22/2026"
authors: "Yunfei Xie, Howard H. Qian, Shiyi Lan"
arxivUrl: "https://arxiv.org/abs/2610.31670v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Robotic foundation models are typically evaluated through costly closed-loop rollouts, which motivates cheap offline proxies for model capability. The Platonic Representation Hypothesis (PRH) suggests that as representations improve, different modalities such as vision and language converge toward a shared statistical model of reality. We ask whether motion trajectories form another such modality: as embodied models become more capable, should their sensory representations converge toward the structure of physical motion? To examine this, we propose Sensorimotor Alignment ($S^2$), a training-free offline metric that measures how well a model's sensory representation aligns with the geometry of physical motion. We find that $S^2$ correlates positively with downstream robot task success across embodied model families, making it a low-cost offline proxy for prioritizing models before closed-loop evaluation. $S^2$ can also identify promising vision-language model (VLM) backbones even before costly fine-tuning into vision-language-action models (VLAs). Beyond this correlation, $S^2$ offers representation-level explanations for phenomena observed in VLAs and world action models (WAMs). With $S^2$, we extend PRH to embodied models and make sensorimotor alignment empirically measurable, offering insight into why an embodied model succeeds beyond its closed-loop success rate.

## Reference

- **ArXiv ID**: 2610.31670v1
- **Link**: [2610.31670v1](https://arxiv.org/abs/2610.31670v1)
- **Authors**: Yunfei Xie, Howard H. Qian, Shiyi Lan
- **Published**: 10/22/2026

## Categories

cs.CV, cs.LG, cs.RO
