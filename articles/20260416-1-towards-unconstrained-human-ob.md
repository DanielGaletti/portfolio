---
title: "Towards Unconstrained Human-Object Interaction"
date: "04/15/2026"
authors: "Francesco Tonini, Alessandro Conti, Lorenzo Vaquero"
arxivUrl: "https://arxiv.org/abs/2604.14069v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

This paper introduces the Unconstrained Human-Object Interaction (U-HOI) task, a novel domain in human-object interaction detection that eliminates the requirement for a predefined list of interactions at both training and inference time. Current HOI models rely on a predetermined vocabulary of interactions, limiting their applicability to static environments. In contrast, U-HOI allows for the recognition of a wide range of interactions, enabling the detection of human-object interactions in more dynamic and complex scenarios.

To address the U-HOI task, the authors leverage Multimodal Large Language Models (MLLMs), which have become increasingly popular for their ability to process and understand free-form text. The proposed pipeline consists of two primary components: test-time inference and language-to-graph conversion. During test-time inference, the MLLM generates free-form text describing the human-object interaction. Subsequently, the language-to-graph conversion module extracts structured interactions from the generated text, providing a more interpretable representation of the interaction.

The authors evaluate a range of MLLMs on the U-HOI task and demonstrate their effectiveness in recognizing human-object interactions. The results highlight the limitations of current HOI detectors, which are often restricted to a predefined set of interactions. In contrast, MLLMs offer a more flexible and adaptable approach to interaction recognition, enabling the detection of a broader range of human-object interactions.

The proposed pipeline and the use of MLLMs for U-HOI detection demonstrate the potential for more robust and flexible human-object interaction recognition. The authors' findings suggest that MLLMs can be a valuable tool for addressing the limitations of current HOI detectors and enabling the detection of human-object interactions in more complex and dynamic scenarios.

## Reference

- **ArXiv ID**: 2604.14069v1
- **Link**: [2604.14069v1](https://arxiv.org/abs/2604.14069v1)
- **Authors**: Francesco Tonini, Alessandro Conti, Lorenzo Vaquero
- **Published**: 04/15/2026

## Categories

cs.CV
