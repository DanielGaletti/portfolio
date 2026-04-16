---
title: "ROSE: Retrieval-Oriented Segmentation Enhancement"
date: "04/15/2026"
authors: "Song Tang, Guangquan Jie, Henghui Ding"
arxivUrl: "https://arxiv.org/abs/2604.14147v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Existing segmentation models based on multimodal large language models (MLLMs), such as LISA, often struggle with novel or emerging entities due to their inability to incorporate up-to-date knowledge. To address this challenge, the authors introduce the Novel Emerging Segmentation Task (NEST), which focuses on segmenting novel entities that MLLMs fail to recognize (absent from training data) and emerging entities that require up-to-date external information for accurate recognition.

To support NEST research, the authors construct a benchmark using an automated pipeline that generates news-related data samples for comprehensive evaluation. They also propose ROSE: Retrieval-Oriented Segmentation Enhancement, a plug-and-play framework that augments any MLLM-based segmentation model with four key components: an Internet Retrieval-Augmented Generation module, a Textual Prompt Enhancer, a Visual Prompt Enhancer, and a WebSense module that intelligently decides when to invoke retrieval based on user input.

Experimental results demonstrate that ROSE significantly boosts performance on the NEST benchmark, outperforming a strong Gemini-2.0 Flash-based retrieval baseline by 19.2 in gIoU. The work was accepted at CVPR 2026 Findings.

## Reference

- **ArXiv ID**: 2604.14147v1
- **Link**: [2604.14147v1](https://arxiv.org/abs/2604.14147v1)
- **Authors**: Song Tang, Guangquan Jie, Henghui Ding
- **Published**: 04/15/2026

## Categories

cs.CV
