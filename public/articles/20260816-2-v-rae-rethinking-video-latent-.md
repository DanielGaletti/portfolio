---
title: "V-RAE: Rethinking Video Latent Spaces for Generation"
date: "08/13/2026"
authors: "Minghui Guo, Shengqiong Wu, Hao Fei"
arxivUrl: "https://arxiv.org/abs/2608.13556v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Latent video generation relies on autoencoders to define a compact space in which generative models operate. Although video autoencoder architectures have evolved substantially, their latent spaces are still optimized primarily for pixel-level reconstruction and provide limited high-level semantic organization. A reconstruction-optimal latent space, however, need not be well suited to generative modeling. We propose V-RAE, a video representation autoencoder that builds compact generative latents on top of frozen vision foundation model representations. A lightweight temporal pooling module removes temporal redundancy while preserving semantic structure, and a video decoder reconstructs continuous motion from the compressed features. We evaluate V-RAE with four representative frozen encoders on video reconstruction, semantic probing, and class-conditional generation. V-RAE achieves 2.13 rFVD on K600, outperforming all evaluated large-scale pretrained video VAEs. Its latents retain substantially more semantic information than conventional video tokenizer latents. Under matched generation settings, our best variant achieves gFVD scores of 117.86 and 19.16 on UCF101 and K600, respectively, while converging up to 6x faster}. We further show that reconstruction quality alone is insufficient to characterize generative utility and introduce tFVD, a temporal-coherence diagnostic that correlates more reliably with downstream generation quality. Beyond video generation, V-RAE also improves future video prediction on Cityscapes over the Wan 2.2 VAE latent space under matched prediction settings. Taken together, the experiments show that frozen semantic representations can support video reconstruction, generation, and predictive modeling. The project page: https://v-rae.github.io/.

## Reference

- **ArXiv ID**: 2608.13556v1
- **Link**: [2608.13556v1](https://arxiv.org/abs/2608.13556v1)
- **Authors**: Minghui Guo, Shengqiong Wu, Hao Fei
- **Published**: 08/13/2026

## Categories

cs.CV
