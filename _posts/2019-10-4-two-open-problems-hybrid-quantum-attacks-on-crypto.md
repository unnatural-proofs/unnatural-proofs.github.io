---
layout: post
title:  "Two Open Problems: Hybrid Quantum Attacks on Crypto"
author: sanketh
categories: cryptography
tags: aes sike post-quantum-crypto
summary: i crypto
comments: false
---

Today, I want to mention two open problems that I have been thinking about. These are off-shoots of my work with Matt Coudron on the power of quantum depth ([arXiv:1909.10503](https://arxiv.org/abs/1909.10503); see, also, [arXiv:1909.10303](https://arxiv.org/abs/1909.10303)).

There does not seem to be a clear metric in quantum cryptanalysis. For example, we say that the security level of AES-256 is 256 bits, and the quantum security level of AES-256 is 256/2 = 128 bits. But, that number 128 does not capture the hardness of the attack. The classical attack can be trivially parallelized, but the quantum attack (which uses Grover's algorithm) cannot be parallelized well. [NIST (2016)](https://csrc.nist.gov/CSRC/media/Projects/Post-Quantum-Cryptography/documents/call-for-proposals-final-dec-2016.pdf) tries to account for this in their PQC competition by introducing a variable MAXDEPTH, corresponding to the maximum depth of the quantum circuit in the attack, set to a value between $2^{40}$ and $2^{96}$. But, this might still understate the security of the schemes (think of memory-intensive quantum algorithms). [Jaques and Schanck (2019)](https://ia.cr/2019/103)  solve this problem with their *DW-cost metric* (depth of the circuit times the width of the circuit). I like the DW-cost metric because it makes more sense from a *quantum-native* perspective. But, this raises new a problem, what about hybrid attacks? It turns out that this can be easily remedied by using the DW-cost for the quantum part and the traditional number of ops cost for the classical part.

The setting is the following, the MAXDEPTH is set to be $2^{32}$ (say each layer (depth-1 circuit) takes $1000$ nanoseconds to apply[^time], and we can run a computation for an hour) and MAXWIDTH is set to $2^{32}$ (that is about 4 giga(qu)bits). From this setting it is obvious that you cannot do a purely quantum attack, you need a hybrid attack (and that is my intention.) Just to be clear, a *hybrid quantum attack* is a classical circuit with embedded quantum circuits with depth at most MAXDEPTH and width at most MAXWIDTH, and the output of a quantum circuit is a classical bit string (or, to be more precise, a probability distribution.) Let's define the *hybrid-DW-cost* as the sum of the DW-costs of the embedded quantum circuits and the number of gates in the classical circuit.

### Question 1: Hybrid Generic Pre-Image Attacks on AES?

**Question.** Is there a non-trivial hybrid generic pre-image attack on AES? 

**Conjecture.** The security level of AES-256, under hybrid quantum attacks in the hybrid-DW-cost model, is essentially the same as the its classical security level.

A good starting point: [arXiv:1512.04965](https://arxiv.org/abs/1512.04965), [2019/854](https://ia.cr/2019/854), and [2019/1146](https://ia.cr/2019/1146).

### Question 2: Hybrid Generic Claw-Finding Attacks on SIKE?

**Question.** [Tani's (2007)](https://arxiv.org/abs/0708.2584) algorithm, which is used for generic claw-finding attacks, is based on quantum walks which seem to have the same parallelization difficulties as Grover's algorithm. (See Section 5.6 in [Jaques and Schanck (2019)](https://ia.cr/2019/103).) Is there a non-trivial hybrid generic claw-finding attack on SIKE? 

**Conjecture.** The security level of SIKE-(503\|610\|751), under hybrid quantum attacks in the hybrid-DW-cost model, is essentially the same as the its classical security level.

A good starting point: [arXiv:0708.2584](https://arxiv.org/abs/0708.2584) and [2019/103](https://ia.cr/2019/103).

### Why These Questions?

1. They force one to think about hybrid attacks.
2. They seem to model near-term attacks.
3. They don't seem too hard. Question 1 might even be easy because we know explicit bounds on how Grover parallelizes.
4. They are fun math problems. :-)

<hr />

[^time]: At first glance, this number might seem absurd---surely we can apply a gate in less than $1000$ nanoseconds, but I am trying to account for the lost nearest neighbor property. For now, it seems easier to make this number larger than to impose a nearest neighbor constraint. (Also, I am trying to be architecture agnostic.)