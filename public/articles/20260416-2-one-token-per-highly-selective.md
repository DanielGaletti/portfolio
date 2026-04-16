---
title: "One Token per Highly Selective Frame: Towards Extreme Compression for Long Video Understanding"
date: "04/15/2026"
authors: "Zheyu Zhang, Ziqi Pang, Shixing Chen"
arxivUrl: "https://arxiv.org/abs/2604.14149v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Long video understanding is inherently challenging for vision-language models (VLMs) because of the extensive number of frames. With each video frame typically expanding into tens or hundreds of tokens, the limited context length of large language models (LLMs) forces the VLMs to perceive the frames sparsely and lose temporal information. To address this, the authors explore extreme video token compression towards one token per frame at the final LLM layer.

The key insight is that heuristic-based compression, widely adopted by previous methods, is prone to information loss. This motivates supervising LLM layers into learnable and progressive modules for token-level compression (LP-Comp), enabling the VLM to process 2x–4x more frames with improved performance.

To further increase token efficiency, the paper also investigates frame-level compression, which selects the frames most relevant to the query via internal attention scores of the LLM layers — named question-conditioned compression (QC-Comp). Position bias in long contexts is mitigated by splitting videos into short segments and using local attention. The resulting model is fine-tuned from VideoChat-Flash using only 2.5% of supervised fine-tuning data, boosting accuracy from 42.9% to 46.2% on LVBench.

## Reference

- **ArXiv ID**: 2604.14149v1
- **Link**: [2604.14149v1](https://arxiv.org/abs/2604.14149v1)
- **Authors**: Zheyu Zhang, Ziqi Pang, Shixing Chen
- **Published**: 04/15/2026

## Categories

cs.CV
