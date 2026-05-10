---
title: "ActCam: Zero-Shot Joint Camera and 3D Motion Control for Video Generation"
date: "05/07/2026"
authors: "Omar El Khalifi, Thomas Rossi, Oscar Fossey"
arxivUrl: "https://arxiv.org/abs/2605.06667v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

For artistic applications, video generation requires fine-grained control over both performance and cinematography, i.e., the actor's motion and the camera trajectory. We present ActCam, a zero-shot method for video generation that jointly transfers character motion from a driving video into a new scene and enables per-frame control of intrinsic and extrinsic camera parameters. ActCam builds on any pretrained image-to-video diffusion model that accepts conditioning in terms of scene depth and character pose. Given a source video with a moving character and a target camera motion, ActCam generates pose and depth conditions that remain geometrically consistent across frames. We then run a single sampling process with a two-phase conditioning schedule: early denoising steps condition on both pose and sparse depth to enforce scene structure, after which depth is dropped and pose-only guidance refines high-frequency details without over-constraining the generation. We evaluate ActCam on multiple benchmarks spanning diverse character motions and challenging viewpoint changes. We find that, compared to pose-only control and other pose and camera methods, ActCam improves camera adherence and motion fidelity, and is preferred in human evaluations, especially under large viewpoint changes. Our results highlight that careful camera-consistent conditioning and staged guidance can enable strong joint camera and motion control without training. Project page: https://elkhomar.github.io/actcam/.

## Reference

- **ArXiv ID**: 2605.06667v1
- **Link**: [2605.06667v1](https://arxiv.org/abs/2605.06667v1)
- **Authors**: Omar El Khalifi, Thomas Rossi, Oscar Fossey
- **Published**: 05/07/2026

## Categories

cs.CV, cs.AI, cs.LG
