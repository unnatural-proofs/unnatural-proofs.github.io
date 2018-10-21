---
layout: post
title:  "A Question About Quantum Advice"
author: sanketh
categories: complexity-theory
tags: quantum-advice open-questions
summary: too many questions
comments: true
---

<div style="display:none;">
$$
\newcommand{\P}{\text{P}}
\newcommand{\BQP}{\text{BQP}}
\newcommand{\BPP}{\text{BPP}}
\newcommand{\PSPACE}{\text{PSPACE}}
\newcommand{\SP}{\text{#P}}
$$
$$
\newcommand{\ket}[1]{\lvert #1 \rangle}
\newcommand{\bra}[1]{\langle #1 \rvert}
\newcommand{\coloneqq}{\mathrel{:=}}
\newcommand{\dim}{\text{dim}}
$$
</div>

One of the stupidest things about being an undergrad is that I never have enough time for research---and I am only halfway though!! Anyway, without further ado, here is a question I have thought a little bit about but never solved. I apologize in advance for any errors, I haven't seriously thought about this problem in almost a year.

## Question: Is QSZK/qpoly contained in EXP/poly?

My interest in this question came from trying to understand the limits on the power of quantum interactive proofs with advice. [Aaronson (2005)](https://theoryofcomputing.org/articles/v001a001/v001a001.pdf) showed that BQP/qpoly is contained in PP/poly and [Raz (2009)](https://doi.org/10.1007/s00453-007-9033-6) showed that QIP(2)/qpoly = ALL. Due [Watrous' (2002)](https://cs.uwaterloo.ca/~watrous/Papers/HonestVerifierQuantumZeroKnowledge.pdf) we know that QSZK lies between BQP and QIP(2). Moreover, it has a nice complete problem so a natural and seemingly easy question to bound the power of QSZK/qpoly. This question is also left as an open problem in [Aaronson (2018)](https://www.scottaaronson.com/papers/dqpqpoly.pdf) where they showed that PDQP/qpoly = ALL. 

My conjecture is that QSZK/qpoly is contained in EXP/poly. My intuition is that a modification of Aaronson's (2003) [original proof](http://www.scottaaronson.com/talks/qpoly.ppt) that BQP/qpoly is contained in EXP/poly works here.

#### Sketch of Aaronson's proof

(Adapted from [Aaronson's slides](http://www.scottaaronson.com/talks/qpoly.ppt))

Let $A$ be a BQP/qpoly algorithm. Fix an input length $n$ and an advice state $\ket{\psi}$. We can make the error of $A$ exponentially small by taking polynomially many copies $\ket{\psi}^{\otimes p(n)}$ of the advice.

Define $S_0$ to be the set of advice states that cause the algorithm to output $0$ with probability $1-\epsilon$, and $S_1$ to be the set of advice states that cause the algorithm to output $1$ with probability $1-\epsilon$. 

**Claim 1.** There exist orthogonal subspaces $H_0, H_1$ such that $S_0$ is exponentially close to $H_0$ and $S_1$ is exponentially close to $H_1$.

*Proof.* Given an advice state $\ket{\varphi}$, the acceptance probability of a BQP/qpoly algorithm is given by
\begin{equation}\label{acceptance}
    \bra{\varphi} \rho \ket{\varphi}.
\end{equation}
where $\rho$ is a *quantum state* (positive semidefinite trace one matrix). Define 
\begin{align}
    H_0:& \;\text{Subspace spanned by eigenvectors of $\rho$ with eigenvalues in $[0,1/3]$}\\\
    H_1:& \;\text{Subspace spanned by eigenvectors of $\rho$ with eigenvalues in $[2/3,1]$}
\end{align}
It is known (see [this proof](https://math.stackexchange.com/q/762984/460480) on Math StackExchange) that eigenvectors of distinct eigenvalues of quantum states are orthogonal so these subspaces are orthogonal as claimed. $$\tag*{$\square$}$$

For each length $n$, define the classical advice for the EXP/poly algorithm to be a polynomial number of strings $z_i$, each of length $n$ encoding a positive integer $z_i \leq 2^n$. Call this set of strings $B$.

We will now describe an EXP/poly algorithm for $A$, that takes advice of the form mentioned above.

Fix an input $x \in \\{0,1\\}^n$ and loop through all $y \leq x$ in lexicographic order. (We can do this in EXP.)

Define $T_0$ to be the entire Hilbert space and we will iteratively define $T_y$ be the subspace of advice states $\ket{\psi}$ compatible with the inputs $1$ to $y$ as follows. First, define
\begin{align}
    \Pi_0:& \;\text{Projection of $T_{y-1}$ onto $H_0$}\\\
    \Pi_1:& \;\text{Projection of $T_{y-1}$ onto $H_1$}
\end{align}
and then for each $y$, do the following: 

1. If $y \notin B$, choose the larger subspace; that is, $T_y \coloneqq \Pi_0$ if $\dim(\Pi_0) \geq \dim(\Pi_1)$, and $T_y \coloneqq \Pi_1$ otherwise.
2. If $y \in B$, choose the smaller subspace; that is, $T_y \coloneqq \Pi_1$ if $\dim(\Pi_0) \geq \dim(\Pi_1)$, and $T_y \coloneqq \Pi_0$ otherwise.

Notice that each time we pick the smaller subspace, $\dim(T_y)$ is at least halved (because $\Pi_0$ and $\Pi_1$ are projections onto orthogonal subspaces) so we only need polynomially many bits of advice to get exponentially close to $\ket{\psi}^{\otimes p(n)}$. If we assume that this works (exercise for the interested reader), then by equation \eqref{acceptance}, we get the acceptance probability of $A$.

#### The QSZK case

The naïve approach is to use the above procedure to learn about $\ket{\psi}$ and then use the ideas of [Kitaev and Watrous (2000)](https://cs.uwaterloo.ca/~watrous/Papers/QuantumInteractiveProofs.pdf) to simulate the quantum interactive proof system in EXP. But that does not work in general because of the aforementioned result of [Raz (2009)](https://doi.org/10.1007/s00453-007-9033-6) who showed that QIP(2)/qpoly = ALL.

So, to prove this, one needs to take advantage of the statistical zero-knowledge restriction. It is easy to see that an analogue of [Watrous' (2002)](https://cs.uwaterloo.ca/~watrous/Papers/HonestVerifierQuantumZeroKnowledge.pdf) *Quantum State Distinguishability* (QSD) where the circuits take as input $\ket{\psi} \otimes \ket{0}^{\otimes n}$, which I will call *Advice Quantum State Distinguishability* (AQSD), is complete for QSZK/qpoly. I imagine that an analog of Watrous' proof that QSD is in PSPACE works for AQSD, which would put QSZK/qpoly in EXP/poly. (We still need EXP because the above procedure to learn $\ket{\psi}$ takes exponential time.)

**Acknowledgements.** I thank Andrew Drucker and John Watrous for helpful discussions. (and sorry for giving up!)