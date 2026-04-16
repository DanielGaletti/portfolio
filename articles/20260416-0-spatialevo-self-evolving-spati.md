---
title: "SpatialEvo: Self-Evolving Spatial Intelligence via Deterministic Geometric Environments"
date: "04/15/2026"
authors: "Dinging Li, Yingxiu Zhao, Xinrui Cheng"
arxivUrl: "https://arxiv.org/abs/2604.14144v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

This paper presents SpatialEvo, a self-evolving framework for 3D spatial reasoning that leverages the deterministic nature of geometric environments to improve model performance. The proposed framework, centered on the Deterministic Geometric Environment (DGE), formalizes 16 spatial reasoning task categories under explicit geometric validation rules. This approach allows for the creation of zero-noise interactive oracles, which replace model consensus with objective physical feedback.

In SpatialEvo, a single shared-parameter policy co-evolves across questioner and solver roles under DGE constraints. The questioner generates physically valid spatial questions grounded in scene observations, while the solver derives precise answers against DGE-verified ground truth. This setup enables the model to learn from its own mistakes and correct its geometric errors through objective physical feedback. Additionally, a task-adaptive scheduler endogenously concentrates training on the model's weakest categories, producing a dynamic curriculum without manual design.

The proposed framework has been experimentally evaluated across nine benchmarks, demonstrating that SpatialEvo achieves the highest average score at both 3B and 7B scales. Notably, SpatialEvo exhibits consistent gains on spatial reasoning benchmarks and no degradation on general visual understanding. This suggests that SpatialEvo can effectively improve model performance on 3D spatial reasoning tasks while maintaining its general visual understanding capabilities.

The key innovation of SpatialEvo lies in its ability to leverage the deterministic nature of geometric environments to improve model performance. By formalizing spatial reasoning task categories under explicit geometric validation rules, SpatialEvo creates a self-evolving framework that can learn from its own mistakes and correct its geometric errors through objective physical feedback. This approach has been shown to be effective across a range of benchmarks, making SpatialEvo a promising framework for 3D spatial reasoning tasks.

## Reference

- **ArXiv ID**: 2604.14144v1
- **Link**: [2604.14144v1](https://arxiv.org/abs/2604.14144v1)
- **Authors**: Dinging Li, Yingxiu Zhao, Xinrui Cheng
- **Published**: 04/15/2026

## Categories

cs.CV, cs.CL
