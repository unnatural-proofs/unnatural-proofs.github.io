---
layout: post
title:  "Researchers did *not* prove that quantum computers are better than classical computers!!!"
author: sanketh
categories: complexity-theory
tags: quantum-advantage rant
summary: another rant
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
</div>

**Update:** See [this comment](https://twitter.com/quantum_aram/status/1053732821553033216) by [@quantum_aram](https://twitter.com/quantum_aram). (I modified the wording of the post to reflect that this is what *I* think. As mentioned in the comment, Bravyi et al. *proved* that a class of quantum circuits are better than a class of classical circuits at a certain problem. I was only trying to point out the caveats in their result, not disputing the result! (I am not that crazy!!))

I really don't like to rant about the press good results receive because the results themselves are great---but the way traditional press is interpreting this is insane.

Firstly, this is one of those late reactions from the press. (BTW did you know that during the [crash of 1929](https://en.wikipedia.org/wiki/Wall_Street_Crash_of_1929) the ticker tape was hours late!) This paper has been on the arXiv since April 2017 and was the subject of a [plenary lecture](https://collegerama.tudelft.nl/Mediasite/Showcase/qip2018/Presentation/53e90567101440b1a9eeb308b6bd48211d) at QIP 2018. 

Secondly, the result is that there exists a *relational problem* which can be solved by *bounded fan-in, bounded fan-out, constant-depth quantum circuits* but cannot be solved by *bounded fan-in, unbounded fan-out, sub-logarithmic-depth classical circuits*. Yes, you heard me right, there is no oracle involved. This is an amazing result!!

But, here are two reasons why I think this result does not constitute a *proof* that (general) quantum computers are better than (general) classical computers:

1. It compares constant-depth quantum circuits to sub-logarithmic depth classical circuits
2. It concerns relational problems

I think a true proof that quantum computers are better than classical computers would need to show that there exists a *decision problem* that can be decided by *bounded-error polynomial-size quantum circuits* but cannot be decided by *bounded-error polynomial-size classical circuits*. Succinctly, $\BQP \supsetneq \BPP$. But, back in 1997, [Ethan Bernstein and Umesh Vazirani](https://doi.org/10.1137/S0097539796300921) showed that $\BQP \subseteq \P^\SP$ so a proof of this would also show that $\P \neq \PSPACE$. Going back, this result of Sergey Bravyi, David Gosset, and Robert Koenig takes us many steps toward this holy grail by introducing some brilliant techniques but doesn't go all the way. 

For more on the result I highly recommend [Ashley Montanaro's prespective](https://doi.org/10.1126/science.aau9555) and the [article itself](https://arxiv.org/abs/1704.00690). For a slight improvement of this result and an application to certified randomness expansion, see Matthew Coudron, Jalex Stark, and Thomas Vidick's [super recent article](https://arxiv.org/abs/1810.04233).