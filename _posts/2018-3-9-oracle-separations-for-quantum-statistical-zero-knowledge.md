---
layout: post
title:  "Oracle Separations for Quantum Statistical Zero-Knowledge"
author: sanketh
categories: quantum complexity-theory
tags: qszk oracles
summary: i write
comments: true
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

*[Moved from my previous blog.]*

John Watrous and I finally put our paper <a href="https://arxiv.org/abs/1801.08967">"Oracle Separations for Quantum Statistical Zero-Knowledge"</a> on the arXiv. This post hopes to motivate and put our work in context. In what follows, I assume that you are familiar with quantum computing, but if you see something you do not quite understand, feel free to ask about it in the comments.

\\(\BQP\\) is the class of problems a quantum computer can <em>efficiently</em> solve; that is, there exists a polynomial-time uniform family of quantum circuits that accepts with high probability if the answer is yes and rejects with high probability if the answer is no. This class generalizes \\( \BPP \\). See <a href="https://people.eecs.berkeley.edu/~christos/classics/Deutsch_quantum_theory.pdf">Deutsch (1985)</a>, <a href="http://people.eecs.berkeley.edu/~vazirani/pubs/bv.ps">Bernstein and Vazirani (1997)</a> or the survey of <a href="https://arxiv.org/abs/0804.3401">Watrous (2008)</a> for more on this.

Before we proceed, I wanna stress a technical point: we are only interested in <em>promise problems</em>! These are pairs \\( (A_{\text{yes}}, A_{\text{no}}) \\) of sets which correspond to yes and no inputs. Most people in theoretical computer science are familiar with <em>languages</em>, but promise problems are more general and better, trust me, or see <a href="http://www.wisdom.weizmann.ac.il/~oded/prpr.html">Goldreich (2005)</a>. tl;dr: When you are dealing with probability distributions or more generally quantum states, one tends to run into edge problems. For instance, consider this meta problem: accept if the probability of acceptance of a circuit is greater than \\( \frac{3}{4} \\). What is the circuit supposed to do for \\( \frac{3}{4} - \epsilon \\) where \\( \epsilon \\) is insanely small? The behavior is clearly undefined. So, in the world of promise problems we say something like: accept if it accepts with probability greater than \\( \frac{3}{4} \\) (the \\(A_{\text{yes}}\\)) and reject if it accepts with probability less than \\( \frac{1}{4} \\) (the \\(A_{\text{no}}\\)). And, we don't care about inputs which are not in \\( A_{\text{yes}} \cup A_{\text{no}} \\).

So, what is \\( \UP \\)? It is the class of problems for which one has a unique witness or proof (Recall, that \\( \NP \\) just requires <em>a</em> witness). An example of a \\( \UP \\) problem is <u>Factoring</u> (in a UFD, if you know what that is), as one always has a unique factorization. But, let me put it in this promise problem framework: Given \\( x \in \N \\), accept if it has a factor less than \\( 17 \\) and reject if it does not. The witness would be the prime factorization of \\( x \\). This class naturally arises in the context of counting complexity <a href="https://www.sciencedirect.com/science/article/pii/0020019076900971">(Valiant, 1976)</a>. It is also known that one-way functions exist if and only if \\( \P \neq \UP \\) <a href="https://epubs.siam.org/doi/abs/10.1137/0217018">(Grollmann and Selman, 1988)</a> <a href="https://ac.els-cdn.com/0304397585900854/1-s2.0-0304397585900854-main.pdf?_tid=4b843195-188f-4236-b845-8622c13d9086&amp;acdnat=1520641404_10630e1c17d9df91d9ad15709e542f1b">(Ko, 1985)</a>. I will also add that one-way permutations exist if and only if \\( \P \neq (\UP \cap \coUP) \\) <a href="https://www.sciencedirect.com/science/article/pii/S0022000003000680?via%3Dihub">(Homan and Thakur, 2003)</a>.

Finally, \\( \QSZK \\) is the class of problems that have quantum statistical zero-knowledge interactive proofs (hence the name). <a href="https://cs.uwaterloo.ca/~watrous/Papers/HonestVerifierQuantumZeroKnowledge.pdf">Watrous (2002)</a> gave a natural complete problem for this class, which is similar to <a href="http://web.cs.ucla.edu/~sahai/work/web/2003%20Publications/J.ACM2003.pdf">Sahai and Vadhan's (2003)</a> <u>Statistical Difference</u>. Watrous' complete problem goes like this: given two quantum states \\( \rho \\) and \\( \sigma \\), accept if the states are close to each other and reject if they are far apart. When I first saw this problem, I was like "Can't you just measure and output the result?" Well, you cannot always do that because the closeness and farness only guarantee that a measurement exists but says nothing about the complexity of the measurement. This class naturally arises in the context of quantum error correction and separability testing <a href="https://arxiv.org/abs/1308.5788">(Gutoski, Hayden, Milner and Wilde, 2013)</a>. I also can't not mention the beautiful paper of <a href="https://arxiv.org/abs/1301.4504">Harlow and Hayden (2013)</a>. For more on QSZK, see <a href="https://cs.uwaterloo.ca/~watrous/Papers/HonestVerifierQuantumZeroKnowledge.pdf">Watrous (2002)</a> and <a href="https://cs.uwaterloo.ca/~watrous/Papers/ZeroKnowledgeAgainstQuantum.pdf">Watrous (2009)</a>.

We believe that \\( \QSZK \\) is strictly larger than \\( \BQP \\). Intuitively, it also seems that \\( \SZK \\) (replace the quantum states above with probability distributions) is not contained in \\( \BQP \\). But even constructing an oracle such that they were distinct was a big open problem in quantum query complexity for a while before <a href="https://www.scottaaronson.com/papers/collision.pdf">Aaronson</a> resolved it in 2002. See, also, <a class="small-link-text" href="https://doi.org/10.1145/1008731.1008735" target="_self">Aaronson and Shi (2004)</a>.

As I noted in an <a href="http://sankethmenda.com/blog/2018/02/a-quick-note-on-quantum-computers-and-np-hard-problems/">earlier post</a>, <a href="https://arxiv.org/abs/quant-ph/9701001">Bennett, Bernstein, Brassard and Vazirani (1997)</a> proved the existence an oracle such that \\( (\NP \cap \coNP) \not\subseteq \BQP \\) and of a random oracle such that \\( \NP \not\subseteq \BQP \\). Shortly afterward, <a href="https://arxiv.org/abs/cs/9811023">Fornow and Rogers (1998)</a> proved the existence an oracle such that \\( (\UP \cap \coUP) \not\subseteq \BQP \\). In this work, we generalized these results to \\( \QSZK \\). Specifically, we proved the existence of an oracle such that \\( (\UP \cap \coUP) \not\subseteq \QSZK \\) and that with respect to a random oracle \\( \UP\not\subseteq \BQP \\).

I hope that is enough motivation to read the paper. :-D

