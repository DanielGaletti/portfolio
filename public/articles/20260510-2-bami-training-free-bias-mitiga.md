---
title: "BAMI: Training-Free Bias Mitigation in GUI Grounding"
date: "05/07/2026"
authors: "Borui Zhang, Bo Zhang, Bo Wang"
arxivUrl: "https://arxiv.org/abs/2605.06664v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

GUI grounding is a critical capability for enabling GUI agents to execute tasks such as clicking and dragging. However, in complex scenarios like the ScreenSpot-Pro benchmark, existing models often suffer from suboptimal performance. Utilizing the proposed \textbf{Masked Prediction Distribution (MPD)} attribution method, we identify that the primary sources of errors are twofold: high image resolution (leading to precision bias) and intricate interface elements (resulting in ambiguity bias). To address these challenges, we introduce \textbf{Bias-Aware Manipulation Inference (BAMI)}, which incorporates two key manipulations, coarse-to-fine focus and candidate selection, to effectively mitigate these biases. Our extensive experimental results demonstrate that BAMI significantly enhances the accuracy of various GUI grounding models in a training-free setting. For instance, applying our method to the TianXi-Action-7B model boosts its accuracy on the ScreenSpot-Pro benchmark from 51.9\% to 57.8\%. Furthermore, ablation studies confirm the robustness of the BAMI approach across diverse parameter configurations, highlighting its stability and effectiveness. Code is available at https://github.com/Neur-IO/BAMI.

## Reference

- **ArXiv ID**: 2605.06664v1
- **Link**: [2605.06664v1](https://arxiv.org/abs/2605.06664v1)
- **Authors**: Borui Zhang, Bo Zhang, Bo Wang
- **Published**: 05/07/2026

## Categories

cs.CV, cs.AI
