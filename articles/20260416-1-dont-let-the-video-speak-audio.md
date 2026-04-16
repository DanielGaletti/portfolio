---
title: "Don't Let the Video Speak: Audio-Contrastive Preference Optimization for Audio-Visual Language Models"
date: "04/15/2026"
authors: "Ami Baid, Zihui Xue, Kristen Grauman"
arxivUrl: "https://arxiv.org/abs/2604.14129v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

This paper presents Audio-Contrastive Preference Optimization (ACPO), a novel framework designed to address the issue of video-driven audio hallucination in Audio-Visual Language Models (AVLMs). AVLMs have made significant progress in recent years, but their reliability is hindered by the tendency to rely on visual shortcuts to predict expected sounds, disregarding true auditory evidence. The proposed ACPO framework tackles this problem by introducing a dual-axis preference learning approach.

The ACPO framework comprises two primary objectives: output-contrastive and input-contrastive. The output-contrastive objective aims to penalize visual descriptions that masquerade as audio facts, thereby discouraging the model from relying on visual information to predict sounds. In contrast, the input-contrastive objective swaps audio tracks to explicitly penalize generation that is invariant to the true auditory signal, ensuring that the model produces audio that is grounded in the actual sound.

Through extensive experiments, the authors demonstrate that ACPO effectively mitigates audio hallucination in AVLMs while maintaining their overall multimodal capabilities. The proposed framework establishes highly faithful audio grounding, indicating that ACPO is successful in preventing the model from relying on visual shortcuts to predict sounds. This achievement is crucial for the development of reliable AVLMs that can accurately process and understand audio-visual information.

The ACPO framework offers a promising solution to the problem of video-driven audio hallucination in AVLMs. By introducing a dual-axis preference learning approach, ACPO effectively addresses the issue of visual dominance in AVLMs, leading to more accurate and reliable audio grounding. The framework's ability to maintain overall multimodal capabilities while mitigating audio hallucination makes it a valuable contribution to the field of AVLMs.

## Reference

- **ArXiv ID**: 2604.14129v1
- **Link**: [2604.14129v1](https://arxiv.org/abs/2604.14129v1)
- **Authors**: Ami Baid, Zihui Xue, Kristen Grauman
- **Published**: 04/15/2026

## Categories

cs.CV
