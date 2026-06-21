---
title: "TimeProVe: Propose, then Verify for Efficient Long Video Temporal Reasoning in Activities of Daily Living"
date: "06/18/2026"
authors: "Arkaprava Sinha, Dominick Reilly, Siddharth Krishnan"
arxivUrl: "https://arxiv.org/abs/2606.20561v1"
tags: "artificial intelligence, research, arxiv"
excerpt: "Recent arXiv paper on AI and Computer Vision"
---


## Summary

Long Video Question Answering (LVQA) requires identifying sparse, query-relevant evidence within hours-long untrimmed videos. Existing approaches either process videos densely with large vision-language models (VLMs), incurring prohibitive computational cost, or rely on sparse caption-based reasoning, which often misses temporally localized and motion-centric evidence. We introduce TimeProVe, a cost-efficient hybrid framework for temporally grounded reasoning in long videos. TimeProVe first employs lightweight modules to generate action-grounded answer--evidence hypotheses and subsequently invokes an expensive VLM only for targeted verification. The core of our framework lies in the Action-based Candidate Evidence (ACE) module, which converts temporally localized actions into query-conditioned candidate answers and supporting evidence windows through lightweight LLM reasoning. We further introduce OpenTSUBench (OTB), an open-ended benchmark designed to evaluate temporally grounded reasoning in real-world Activities of Daily Living (ADL) scenarios. Experiments show that TimeProVe outperforms the strongest baseline on OTB by 7.3%, while reducing VLM calls by 75% and inference cost by 93%. Furthermore, without explicit temporal grounding training, TimeProVe achieves competitive performance on Charades-STA, and reaches state-of-the-art results when enhanced with grounding VLMs.

## Reference

- **ArXiv ID**: 2606.20561v1
- **Link**: [2606.20561v1](https://arxiv.org/abs/2606.20561v1)
- **Authors**: Arkaprava Sinha, Dominick Reilly, Siddharth Krishnan
- **Published**: 06/18/2026

## Categories

cs.CV
