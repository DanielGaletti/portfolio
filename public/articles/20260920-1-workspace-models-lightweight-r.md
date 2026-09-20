---
title: "Workspace Models: Lightweight Robotic Memory via Saliency-Driven Supervision"
date: "09/17/2026"
authors: "Nitish Dashora, Douglas Chen, Idan Shenfeld"
arxivUrl: "https://arxiv.org/abs/2609.20820v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Complex robotic manipulation tasks frequently require a long-term memory of past events and actions. As conditioning on full histories renders policies prone to spurious correlations and degrades performance, many approaches to policy memory involve compressing historical information through expensive VLM queries in-the-loop to process only task-salient information. In this paper, we propose an alternative approach in which computationally intensive VLM queries are made during train-time to learn a lightweight latent memory that can be efficiently queried at deployment time. Our representation, which we call the \textbf{workspace token}, is trained by (1) using a VLM to identify current and historical information necessary for completing a task, then (2) distilling these into the workspace token using a set-reconstruction decoder loss. In both simulation and hardware, we show that the workspace token can be used as a drop-in replacement for observations during deployment, enabling policies to solve memory-intensive tasks without the need for VLM reasoning in-the-loop. Interestingly, we found that workspace tokens are not only more lightweight but also lead to better policy performance.

## Reference

- **ArXiv ID**: 2609.20820v1
- **Link**: [2609.20820v1](https://arxiv.org/abs/2609.20820v1)
- **Authors**: Nitish Dashora, Douglas Chen, Idan Shenfeld
- **Published**: 09/17/2026

## Categories

cs.RO, cs.AI
