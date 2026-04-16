---
title: "Towards Unconstrained Human-Object Interaction"
date: "04/15/2026"
authors: "Francesco Tonini, Alessandro Conti, Lorenzo Vaquero"
arxivUrl: "https://arxiv.org/abs/2604.14069v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

The paper "Towards Unconstrained Human-Object Interaction" addresses the limitation of current Human-Object Interaction (HOI) detection models, which rely on a predefined vocabulary of interactions at both training and inference time. This constraint restricts their applicability to static environments and limits their ability to generalize to real-world scenarios. To overcome this limitation, the authors propose a novel HOI domain, referred to as Unconstrained HOI (U-HOI), which removes the requirement for a predefined list of interactions at both training and inference.

The authors leverage the capabilities of Multimodal Large Language Models (MLLMs) to explore a more flexible paradigm for interaction recognition. They evaluate a range of MLLMs on the U-HOI task and introduce a pipeline that includes test-time inference and language-to-graph conversion to extract structured interactions from free-form text. This approach enables the models to learn from unstructured text data and generate structured interactions without relying on a predefined vocabulary.

The proposed pipeline consists of two main components: a text encoder that generates a representation of the input text, and a graph generator that converts the text representation into a structured graph representing the interaction between humans and objects. The authors demonstrate the effectiveness of their approach by evaluating the performance of various MLLMs on the U-HOI task, highlighting the limitations of current HOI detectors and the value of MLLMs for this task.

The results of the study show that MLLMs can be effectively used for unconstrained HOI detection, outperforming traditional HOI detectors in certain scenarios. The proposed approach has the potential to enable more flexible and generalizable HOI detection models that can adapt to real-world environments and scenarios, where the interactions between humans and objects are often unstructured and dynamic.

## Reference

- **ArXiv ID**: 2604.14069v1
- **Link**: [2604.14069v1](https://arxiv.org/abs/2604.14069v1)
- **Authors**: Francesco Tonini, Alessandro Conti, Lorenzo Vaquero
- **Published**: 04/15/2026

## Categories

cs.CV
