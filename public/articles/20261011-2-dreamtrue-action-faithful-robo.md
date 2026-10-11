---
title: "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training"
date: "10/08/2026"
authors: "Junyan Li, Ruizhi Li, Yu Liu"
arxivUrl: "https://arxiv.org/abs/2610.12468v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

We present DreamTrue, a multi-view, cross-embodiment robot world model for action-faithful and physically plausible video prediction. Training such a model on existing robot datasets faces two obstacles: imprecise calibration can impair action following, while limited coverage of unsuccessful interactions can bias predictions toward successful outcomes. To improve action following across embodiments, we render action trajectories into image-space conditions and introduce offline geometric calibration to align these conditions with the target videos. To broaden interaction coverage, we introduce counterfactual post-training, modifying recorded action trajectories and generating future videos under a wider range of actions and contact configurations. To provide feedback on these predictions without paired ground-truth futures, we construct a human-annotated video dataset covering robot, object, and interaction defects and use it to train an embodied video reward model. Its scores guide reinforcement-learning post-training toward more physically plausible interaction outcomes. On AgiBot, DreamTrue attains state-of-the-art action following, while reducing the human-assessed interaction defect rate from from 48.12% to 6.25%. Notably, our model ranks first in the world model track of the AgiBot World Challenge 2026. The project page can be found at https://brave-eai.github.io/DreamTrue.

## Reference

- **ArXiv ID**: 2610.12468v1
- **Link**: [2610.12468v1](https://arxiv.org/abs/2610.12468v1)
- **Authors**: Junyan Li, Ruizhi Li, Yu Liu
- **Published**: 10/08/2026

## Categories

cs.RO, cs.CV
