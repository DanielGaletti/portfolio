---
title: "Sphere Encoder 2"
date: "10/01/2026"
authors: "Kaiyu Yue, Sean McLeish, Ruchit Rawal"
arxivUrl: "https://arxiv.org/abs/2610.02208v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Sphere Encoder is an autoencoder that generates images by decoding random points from a high-dimensional latent sphere. We identify two limitations of the original formulation that reduce its generation quality. First, random points concentrate near the equator relative to the pole on an encoded latent, but the training rotation never reaches this region, leaving a gap that limits one-step generation. Second, training for generation with pixel-wise reconstruction loss encourages the decoder to average over plausible images, producing blurry images that lack high-frequency details. We present Sphere Encoder 2 to address both limitations, substantially improving image generation quality while maintaining the speed and simplicity of a autoencoder. Models are released at \href{https://github.com/kaiyuyue/sphere2}{github.com/kaiyuyue/sphere2}.

## Reference

- **ArXiv ID**: 2610.02208v1
- **Link**: [2610.02208v1](https://arxiv.org/abs/2610.02208v1)
- **Authors**: Kaiyu Yue, Sean McLeish, Ruchit Rawal
- **Published**: 10/01/2026

## Categories

cs.CV
