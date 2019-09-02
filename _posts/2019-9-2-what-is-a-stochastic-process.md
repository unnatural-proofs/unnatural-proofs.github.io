---
layout: post
title:  "What Is a Stochastic Process?"
author: sanketh
categories: probability
tags: stochastic-process
summary: i math
comments: true
---

<div style="display:none;">
$$
\newcommand{\F}{\mathcal{F}}
\newcommand{\I}{\mathcal{I}}
$$
</div>

Recently I have discovered the awesome world of stochastic processes. Firstly, "stochastic process" is a horrible name, it does not have anything to do with "process." If you have never heard of this term, brace yourself because this is gonna sound insanely familiar. So, a *stochastic process* is an indexed list of random variables. That's it. If you have ever worked with randomized algorithms, this is what you call an algorithm, it takes an input and the output is modeled by a random variable.

I am going to give a slightly more formal definition now that we know what it means.

**Definition.** Fix a probability space $(\Omega, \F, P)$ and a measurable space $(S, \Sigma)$. A *stochastic process* is a collection
\\[
    \\{X(i) : i \in \I\\}
\\]
of $S$-valued random variables indexed by a set $\I$.

In many applications, the index set is the positive real numbers and represents time. More generally, it is common to assume that $\I$ is ordered. This adds a lot of structure and allows one to talk about *increments* (how much $X(i)$ differs from $X(i+j)$) and stuff like that.

Also, if you have done some advanced probability, you can observe that stochastic processes generalize *Markov chains*, *random walks*, and *martingales*.

But one could also think about the index set $\I$ as the boolean 

I'm going to end this short post by answering a burning question: how can you use stochastic processes to prove theorems? By leveraging [stochastic calculus](https://en.wikipedia.org/wiki/Stochastic_calculus).

## Further Reading

* Gregory F. Lawler's "Stochastic Calculus: An Introduction with Applications" looks great. I have been meaning to read it for a while now.
* Xinyu Wu's "A stochastic calculus approach to the oracle separation of BQP and PH" simplifies the breakthrough oracle separation of Raz and Tal. [[ECCC](https://eccc.weizmann.ac.il/report/2018/202/)]
* If you want to apply stochastic calculus to TCS, chapter 11 of Ryan O'Donnell's Analysis of Boolean Functions might be a good place to start. [[book website](http://www.contrib.andrew.cmu.edu/~ryanod/)] Also take a look at Ronen Eldan's "
A two-sided estimate for the Gaussian noise stability deficit" which simplifies a theorem due Guy Kindler and Ryan O’Donnell. [[arXiv](https://arxiv.org/abs/1307.2781)] [[Kindler and O'Donnell paper](https://www.cs.cmu.edu/~odonnell/papers/gaussian-noise-sensitivity.pdf)]
