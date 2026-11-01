---
title: "Read, Allocate, Route: Role-Coupled Tokenization for Pixel-Space Generative Transformers"
date: "10/29/2026"
authors: "Jiongfan Yang, Weichen Fan, Haiwen Diao"
arxivUrl: "https://arxiv.org/abs/2610.40647v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Pixel-space generative Transformers typically use one token per image patch, so capturing finer detail requires more tokens and makes global attention increasingly expensive. We observe that finer detail does not necessarily require more global communication: low-frequency structure benefits from global exchange, while high-frequency detail can be modeled locally. Based on this insight, we introduce SpecSlot, a pixel-space rectified-flow Transformer that decouples output detail from the length of the global attention sequence. SpecSlot expands each spatial anchor into multiple slots, each assigned a disjoint band of DCT coefficients; this separates anchor density from spectral subdivision. Only the lowest-frequency slot from each anchor participates in global attention, while all slots interact locally. This allows the model to increase spectral detail without enlarging the global sequence. A spatial head further adds a local correction to the spectral prediction, while the generative state, target, and loss remain in pixel space. On ImageNet-256, SpecSlot achieves a comparable final FID to a FLOPs-matched JiT control while converging faster. On ImageNet-512, it improves FID by 2.84 over the control with 3.9% fewer FLOPs, and comes within only 0.69 FID of JiT-B/16 at 38.2% lower cost. On text-to-image generation, SpecSlot surpasses JiT-B/8 on DPG-Bench by 1.06 at 40.6% lower forward cost.

## Reference

- **ArXiv ID**: 2610.40647v1
- **Link**: [2610.40647v1](https://arxiv.org/abs/2610.40647v1)
- **Authors**: Jiongfan Yang, Weichen Fan, Haiwen Diao
- **Published**: 10/29/2026

## Categories

cs.CV, cs.AI, cs.LG, cs.NE
