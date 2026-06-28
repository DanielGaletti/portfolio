---
title: "DanceOPD: On-Policy Generative Field Distillation"
date: "06/25/2026"
authors: "Wei Zhou, Xiongwei Zhu, Zelin Xu"
arxivUrl: "https://arxiv.org/abs/2606.27377v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Modern image generation demands a single model that unifies diverse capabilities, including text-to-image (T2I), local editing, and global editing. However, these capabilities are rarely naturally aligned and often conflict. For instance, editing tends to degrade T2I performance, while global and local editing interfere with each other. Consequently, effectively composing these capabilities has become a central challenge for image generation model training. To tackle this, we introduce DanceOPD, an on-policy generative field distillation framework for flow-matching models that routes each sample to one capability field, queries one low-noise student-induced state, and trains with a simple velocity MSE objective. With each capability source defined as a velocity field over the shared flow state space, the student learns from fields queried on its own rollout states to compose expert capabilities. This formulation also absorbs operator-defined fields such as classifier-free guidance. Comprehensive experiments on T2I, editing, realism-field absorption, and CFG absorption show that our approach improves multi-capability composition, strengthening target capabilities while preserving anchor generation quality. We believe this work establishes a practical route for generative field distillation in flow-matching models.

## Reference

- **ArXiv ID**: 2606.27377v1
- **Link**: [2606.27377v1](https://arxiv.org/abs/2606.27377v1)
- **Authors**: Wei Zhou, Xiongwei Zhu, Zelin Xu
- **Published**: 06/25/2026

## Categories

cs.CV, cs.CL, cs.LG
