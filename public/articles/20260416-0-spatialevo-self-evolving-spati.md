---
title: "SpatialEvo: Self-Evolving Spatial Intelligence via Deterministic Geometric Environments"
date: "04/15/2026"
authors: "Dinging Li, Yingxiu Zhao, Xinrui Cheng"
arxivUrl: "https://arxiv.org/abs/2604.14144v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

The paper presents a self-evolving framework for 3D spatial reasoning called SpatialEvo. This framework leverages a Deterministic Geometric Environment (DGE) to enable continuous model improvement without relying on manual geometric annotation. The DGE formalizes 16 spatial reasoning task categories under explicit geometric validation rules, allowing unannotated 3D scenes to be converted into zero-noise interactive oracles.

The SpatialEvo framework is centered on a shared-parameter policy that co-evolves across two roles: questioner and solver. The questioner generates physically valid spatial questions grounded in scene observations, while the solver derives precise answers against DGE-verified ground truth. This approach replaces model consensus with objective physical feedback, allowing the model to correct its own geometric errors. Additionally, a task-adaptive scheduler is used to endogenously concentrate training on the model's weakest categories, producing a dynamic curriculum without manual design.

The key insight behind SpatialEvo is that ground truth is a deterministic consequence of the underlying geometry in 3D spatial reasoning. This property allows for the exact computation of ground truth from point clouds and camera poses without any model involvement. By harnessing this property, SpatialEvo achieves continuous model improvement without the need for manual annotation, resulting in improved performance on spatial reasoning benchmarks.

Experiments across nine benchmarks demonstrate that SpatialEvo achieves the highest average score at both 3B and 7B scales, with consistent gains on spatial reasoning benchmarks and no degradation on general visual understanding.

## Reference

- **ArXiv ID**: 2604.14144v1
- **Link**: [2604.14144v1](https://arxiv.org/abs/2604.14144v1)
- **Authors**: Dinging Li, Yingxiu Zhao, Xinrui Cheng
- **Published**: 04/15/2026

## Categories

cs.CV, cs.CL
