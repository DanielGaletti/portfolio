---
title: "Rubric-CEPR: Self-Evolving Image Editing via Reward-Verified Self-Distillation"
date: "10/08/2026"
authors: "Ritesh Thawkar, Shubham Patle, Shravan Venkatraman"
arxivUrl: "https://arxiv.org/abs/2610.12469v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Instruction-guided image editors have become highly capable, yet improving them further still depends on human-edited training pairs or external reward models. Such supervision is costly to obtain and can reward plausible failures: a realistic output may leave the requested change undone or alter content that should be preserved. In this work, we strive to improve a pretrained image editor using only its own generations, without human-edited targets or an external training-time reward model. To this end, we propose a self-evolving framework, named Rubric-CEPR, that verifies the editor's own samples with its internal representations through a rubric-augmented Contrastive Edit-Preservation Reward (CEPR). A Planner proposes structured edit instructions from unlabeled images, the Editor samples multiple candidate edits, and a frozen Critic scores each candidate with decomposed rubric checks for edit realization, removal of the old state, and content preservation, using features already exposed by the editor. Non-compensatory gates reject infeasible candidates, and the best verified candidate is distilled into the editor through lightweight adapter training. On Qwen-Image-Edit, Rubric-CEPR improves ImgEdit from 4.36 to 4.60 (+5.5%), with a +24.9% gain on object isolation, and transfers to GEdit-Bench and Complex-Edit. The same procedure also improves Step1X-Edit by +7.8% on ImgEdit. We hope our approach will serve as a solid baseline for image editors that improve themselves from their own verified samples. Our code is publicly available at $\href{https://riteshthawkar.github.io/Rubric-CEPR/}{\text{this URL}}$

## Reference

- **ArXiv ID**: 2610.12469v1
- **Link**: [2610.12469v1](https://arxiv.org/abs/2610.12469v1)
- **Authors**: Ritesh Thawkar, Shubham Patle, Shravan Venkatraman
- **Published**: 10/08/2026

## Categories

cs.CV
