---
title: "Back to Pixels: Lifting Latent Video Diffusion into Pixel Space"
date: "11/12/2026"
authors: "Yanke Song, Shuo Chen, Chris Rockwell"
arxivUrl: "https://arxiv.org/abs/2611.17336v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Frontier video generation models work in a VAE latent space that compresses video in both space and time. This compression made training tractable, but now limits high-resolution, controllable, and interactive generation -- doubling resolution quadruples token count, conditions apply to groups of frames rather than individual ones, and each response must wait for the rest of its multi-frame block. We present PixVid, a simple yet effective method that lifts a pretrained latent video model to directly generate every frame in pixel space. PixVid keeps the diffusion transformer and replaces the VAE decoder with a convolutional head that renders its outputs into pixels. We find that predicting clean video rather than velocity, together with a larger noise shift, is key to quality. Finetuned from Wan2.1-14B, PixVid is competitive with the latent baseline within $\sim 1.3$M training clips. Working framewise in pixels, it generates at $2\times$ higher resolution with the same per-frame token count, keeps depth-conditioned video editing aligned under fast motion, and responds to each action at the next frame. Project page: https://chenshuo20.github.io/PixVid/

## Reference

- **ArXiv ID**: 2611.17336v1
- **Link**: [2611.17336v1](https://arxiv.org/abs/2611.17336v1)
- **Authors**: Yanke Song, Shuo Chen, Chris Rockwell
- **Published**: 11/12/2026

## Categories

cs.CV
