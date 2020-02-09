---
layout: post
title:  "In Defense of Random Oracles"
author: sanketh
categories: cryptography
tags: random-oracle oracles
summary: not a rant
comments: false
---

<div style="display:none;">
$$
\newcommand{\QSZK}{\textsf{QSZK}}
\newcommand{\SZK}{\textsf{SZK}}
\newcommand{\NP}{\textsf{NP}}
\newcommand{\P}{\textsf{P}}
\newcommand{\coNP}{\textsf{coNP}}
\newcommand{\UP}{\textsf{UP}}
\newcommand{\coUP}{\textsf{coUP}}
\newcommand{\BQP}{\textsf{BQP}}
\newcommand{\BPP}{\textsf{BPP}}
\newcommand{\PSPACE}{\textsf{PSPACE}}
\newcommand{\IP}{\textsf{IP}}
$$
$$
\newcommand{\N}{\mathbb{N}}
$$
$$
\newcommand{\A}{\mathcal{A}}
\newcommand{\poly}{\text{poly}}
\newcommand{\polylog}{\text{polylog}}
$$
$$
\newcommand{\ket}[1]{\lvert #1 \rangle}
\newcommand{\bra}[1]{\langle #1 \rvert}
\newcommand{\coloneqq}{\mathrel{:=}}
\newcommand{\dim}{\text{dim}}
$$
</div>


A few days ago, I read[^1]

> *The Random Oracle Model: A Twenty-Year Retrospective*<br>
> Neal Koblitz and Alfred Menezes<br>
> Crypto ePrint [2015/140](https://eprint.iacr.org/2015/140)

and it reaffirmed my longstanding belief that oracle results are useful. There is a counter example to the "Random Oracle Hypothesis" (one can [show](https://doi.org/10.1016/S0022-0000(05)80084-4) that relative to a random oracle $\IP \neq \PSPACE$; it is exactly what you'd expect) but if used correctly, they are a very powerful tool to reason about the real world. There are similar counterexamples in the crypto world, perhaps the most famous one is Shafi Goldwasser and Yael Tauman's [proof](https://eprint.iacr.org/2003/034) of the insecurity of the *Fiat-Shamir transform*.[^2] I don't want take up more of your time---read the paper.

Some people might call me a hypocrite for liking Koblitz's view about random oracles but not liking [his views](https://www.ams.org/notices/200708/tx070800972p.pdf) towards the foundations of cryptography. To them, I say that it is more nuanced than that. Trashing random oracles because of a few synthetic counterexamples is just as bad as trashing an entire field based on a few anecdotes. (Contrary to the expectations of most people, I never claimed or will claim that, "foundations of crypto---or any other subfield of theoretical computer science---is immediately useful." Also, I agree with Koblitz that "nontightness" in reductions is a huge problem, especially in lattice crypto where people keep throwing around "our scheme is secure based on the worst-case hardness of approximating lattice problems." Sanjit Chatterjee, Neal Koblitz, Alfred Menezes, and Palash Sarkar have a [beautiful paper](https://eprint.iacr.org/2016/360) emphasizing this issue.)

On another side note, the bandwagon effect that Koblitz describes with regard to crypto in the 1990s is exactly what is happening right now with blockchain and machine learning (and to a smaller extent, even quantum computing.)

[^1]: (on the bus)
[^2]: Remind me to write a blog post on this.
