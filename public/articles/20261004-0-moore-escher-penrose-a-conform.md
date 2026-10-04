---
title: "Moore, Escher, Penrose: A Conformal Golden Braid"
date: "10/01/2026"
authors: "Sophia Feldman, Assaf Shocher"
arxivUrl: "https://arxiv.org/abs/2610.02210v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

I don't think I have ever done anything as peculiar in my life. Among other things, it shows a young man looking with interest at a print on the wall of an exhibition that features himself. How can this be? Perhaps I am not far removed from Einstein's curved universe.'' So wrote M.C. Escher about his 1956 lithograph Print Gallery. Nearly half a century later, a mathematical analysis related its geometry to an untwisted source image through a conformal power map $z \mapsto z^α$, $α\in \mathbb{C}$. Building on this construction, we use a frozen text-to-image diffusion model to generate new self-referential scenes. Prompting alone does not enforce the recursion, while a post-hoc transformation can leave structures poorly connected. Applying the transformation during sampling is also insufficient: the denoiser may "repair" the intended distortion or drift out of the prescribed geometry. We construct a generalized inverse $T^\dagger$ of the non-invertible image transformation $T$, adapted to its recursive constraint. In the idealized formulation, the Penrose identity $TT^\dagger T = T$ makes $TT^\dagger$ an idempotent projection onto geometrically admissible images. Yet denoising only the transformed image remains an out-of-distribution task, even with projection. We therefore braid denoising steps with $T$ and $T^\dagger$: source-space steps develop the untwisted scene, while transformed-space steps refine its appearance and connections in the final geometry. We generate Print Gallery-like compositions and explore further transformations. Rather than distorting a finished image, we let the scene and its distortion develop together.

## Reference

- **ArXiv ID**: 2610.02210v1
- **Link**: [2610.02210v1](https://arxiv.org/abs/2610.02210v1)
- **Authors**: Sophia Feldman, Assaf Shocher
- **Published**: 10/01/2026

## Categories

cs.CV
