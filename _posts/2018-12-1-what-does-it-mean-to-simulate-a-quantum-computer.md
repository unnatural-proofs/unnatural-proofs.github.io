---
layout: post
title:  "What Does It Mean to Simulate a Quantum Computer"
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

But, the metric we *really* care about is *computational indistinguishability*. This is a much weaker notion. So, a simulator should be such that a polynomially-bounded classical verifier cannot tell the difference between a true quantum computer and the simulator. Additionally, this model makes more sense for sampling problems.

Now, I wonder if we can construct such simulators for near-term models like noisy IQP circuits (see [Bremner, Montanaro, and Shepherd (2017)](https://arxiv.org/abs/1610.01808)) and noisy boson sampling circuits (see [Oszmaniec and Brod (2018)](https://arxiv.org/abs/1801.06166)).

Also, now that we got interactive proofs in the picture, what about zero-knowledge proofs? Can we construct a protocol such that a quantum computer/simulator can prove its "quantumness" without "leaking" any further information?

Now, what about cross-interrogating simulators? (the analogue of MIP) Say we modified the model so that the polynomially bounded verifier can talk to many quantum computers/simulators at once. Does this give us more power to distinguish between the simulators and the true thing? I think that it does.

Notice that the above questions are for sampling problems and not decision problems. The quantum circuit outputs a polynomial-size bitstring and so does the simulator. The decision problem we ask the verifier is: is the given oracle a quantum computer?

Finally, although these problems seem super theoretical, I strongly believe that they are of practical value.

