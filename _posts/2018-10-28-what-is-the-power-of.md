---
layout: post
title:  "What is the power of a BPP verifier with a QMA prover?"
author: sanketh
categories: complexity-theory
tags: quantum-interactive-proofs open-questions
summary: i dunno
comments: true
---

I dunno. 

I think that it is at least BQP. Dorit Aharonov and Ayal Green [showed](https://arxiv.org/abs/1710.09078) that PostBQP is contained in IP[BPP, PostBQP] (interactive protocol with a BPP verifier and a PostBQP verifier.)

Before someone points it out, I know that if I assume LWE (or technically speaking, the existence of an *extended trapdoor claw-free
family*) then this follows from Urmila Mahadev's [breakthrough result](https://arxiv.org/abs/1804.01082) from earlier this year but I don't want to assume anything.

My current approach is to show that an additive approximation to the Jones polynomial is contained in this class. But I don't know how to make it work. (I only spent half a day on it so maybe it is obvious and I just missed it.)

We know how to do this for easier problems; for instance, François Le Gall, Tomoyuki Morimae, Harumichi Nishimura, and Yuki Takeuchi [showed](https://arxiv.org/abs/1805.03385) that computing orders of solvable groups (which John Watrous [put](https://cs.uwaterloo.ca/~watrous/Papers/QuantumAlgorithmsSolvableGroups.pdf) in BQP) is in IP[BPP, BQP].

While trying to write up a different result (which is what I should be doing), I stumbled upon [Lance Fortnow's thesis](https://lance.fortnow.com/papers/files/thesis.pdf) and it is awesome! (I should prolly get back to writing...)