---
layout: post
title:  "What Does It Mean to Simulate a Quantum Computer?"
author: sanketh
categories: quantum
tags: classical-simulation-of-quantum 
summary: i woke up at 9am for this talk!
comments: true
---

[Hakop Pashayan](https://scholar.google.com/citations?user=GqpgudUAAAAJ&hl=en) of The University of Sydney gave an excellent talk on classical simulation of quantum circuits at the Institute for Quantum Computing yesterday. The talk was based on the following paper:
> *From estimation of quantum probabilities to simulation of quantum circuits*<br>
> Hakop Pashayan, Stephen D. Bartlett, and David Gross<br>
> [arXiv:1712.02806 [quant-ph]](https://arxiv.org/abs/1712.02806)

The big takeaway for me was the new perspective on classical simulation (of quantum computation). 

Normally, when we talk about classical simulation we talk about efficient algorithms for outputting an approximation to the answer; that is, if the original circuit accepts the input with high probability, then the simulation should accept the input with high probability. A self-contained paper that I really like in this direction is [Aaronson and Gottesman (2004)](https://arxiv.org/abs/quant-ph/0406196v5).

But, the metric we *really* care about is *computational indistinguishability*. If we cannot tell the difference between a quantum computer and the simulator in polynomial time, it doesn't matter which one we have. Of course, the simulator should be able to do everything in $\text{NP} \cap \text{BQP}$ but when we are talking about sampling problems (like simulating restricted quantum systems) outside $\text{NP}$ this distinction matters. Also, most restricted quantum systems cannot do stuff like factoring which puts $\text{NP} \cap \text{BQP}$ outside $\text{P}$. 

So, lemme define a simulator as follows. A classical algorithm $A$ is a *(classical) simulator* of a quantum system $\mathcal{Q}$ if there does not exist a polynomially-bounded classical verifier $V$ such that $V$ can tell the difference between $A$ and $\mathcal{Q}$ given oracle access.

Now that we have this definition. A natural question is if we can construct such simulators for near-term models like noisy IQP circuits (see [Bremner, Montanaro, and Shepherd (2017)](https://arxiv.org/abs/1610.01808)) and noisy boson sampling circuits (see [Oszmaniec and Brod (2018)](https://arxiv.org/abs/1801.06166)).

Also, now that we got interactive proofs in the picture, what about zero-knowledge proofs? Can we construct a protocol such that a quantum computer/simulator can prove its "quantumness" without "leaking" any further information?

Also, one can ask about the power of adaptive queries in this setting. Do there exist simulators that are indistinguishable from a quantum system in the parallel query model but are easy distinguished once we allow adaptive queries.

A question that I have been interested in for quite sometime is lower bounds on the simulation of quantum computation. Maybe this is the right model to ask these questions.

Finally, although these problems seem super theoretical, I strongly believe that they are of practical interest.

