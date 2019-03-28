---
layout: post
title:  "Mulmuley's PRAM"
author: sanketh
categories: classical complexity-theory
tags: gct mulmuleys-pram bqnc
summary: this is super cool!!
comments: true
---

<div style="display:none;">
$$
\newcommand{\P}{\text{P}}
\newcommand{\NC}{\text{NC}}
\newcommand{\NP}{\text{NP}}
\newcommand{\BQP}{\text{BQP}}
\newcommand{\BPP}{\text{BPP}}
\newcommand{\PSPACE}{\text{PSPACE}}
\newcommand{\SP}{\text{#P}}
\newcommand{\BQNC}{\text{BQNC}}
$$
$$
\newcommand{\CC}{\mathbb{C}}
\newcommand{\ZZ}{\mathbb{Z}}
\newcommand{\NN}{\mathbb{N}}
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

Today, I will talk about one of my favorite models of computation---Mulmuley's PRAM. To keep this post short, avoid embarrassing myself, and not fail any of my assignments, I will stick to just the model. In a later post, I will talk more generally about GCT.

This post is based on my notes which in turn are based on Joshua Grochow's [lec](https://www.cs.toronto.edu/~toni/Courses/PvsNP/Lectures/lecture7-1.pdf)[tur](https://www.cs.toronto.edu/~toni/Courses/PvsNP/Lectures/lecture7-2.pdf)[es](https://www.cs.toronto.edu/~toni/Courses/PvsNP/Lectures/lecture8.pdf) for CSC 2429 and Mulmuley's [GCT papers](http://gct.cs.uchicago.edu/).

But, first, why should you care about models others than Turing machines (or uniform circuits!)? Because you can *prove* stuff. Remember that time, more than a decade ago, when STOC papers had actual unconditional proofs? That kind of proofs. ;-p 

Here is the punchline:

**Theorem 1** (Mulmuley (1997, 1999))**.** In the PRAM model without bit operations (Mulmuley's PRAM), $\P \neq \NC$.

If you have never seen $\NC$ before, don't worry, we will see a definition soon. For now, think of it as problems that admit really fast ($\polylog$ time) parallel algorithms.

One of the reasons we care about $\P$ vs. $\NC$ is the existence of fast parallel algorithms for combinatorial optimization problems like [max-flow](https://en.wikipedia.org/wiki/Maximum_flow_problem) which are $\P$-Complete. If $\P \neq \NC$, then there is no fast parallel algorithm for max-flow. Max-flow is a particularly nice problem because it has a strongly-polynomial time algorithm; that is, the running time is polynomial in the number of input parameters, not on the input bitlength. We don't know if this property holds for all $\P$ problems (where it makes sense to ask this question!), a major open problem in TCS is to determine if linear programming has a strongly-polynomial algorithm. 

For algebraic problems like max-flow, it makes sense to ask if there is a parallel algorithm that does not use bit operations. Theorem 1 unconditionally rules out this possibility. Notice that Theorem 1 is a formal implication of $\P \neq \NC$---I later argue that it is very strong evidence in favor of it.

**What is a bit operation?** An operation that acts on the individual bits of the input/data like $\vee$, $\wedge$, `extract-bit`, `modify-bit`,... For this to make sense, think of the input as an array of integers. 

### PRAM Model Without Bit Operations aka Mulmuley's PRAM

This model was introduced in Mulmuley (1993). Informally, it is hybrid between algebraic models and restricted circuit models. The input is a bunch of integers. Like algebraic models, you can add and multiply these integers at unit cost. But---unlike algebraic models---the runtime and the number of processors is allowed to depend on *both* the number of inputs and their bitlength (don't worry, this will become more clear in a second). Because of these weird characteristics, this model can do almost everything parallel algorithms can do. For example, it can do 
- Neff's [specified precision polynomial root isolation](https://doi.org/10.1016/S0022-0000(05)80061-3)
- Csanky's [matrix inversion](https://doi.org/10.1137/0205040)
- Ben-Or et al.'s [determination of all roots of a polynomial with real roots](https://epubs.siam.org/doi/10.1137/0217069)
- Karger and Motwani's [min-cuts](https://www.cs.bu.edu/faculty/gacs/courses/cs535/papers/p497-karger.pdf)

I don't quite understand these results, so don't ask me about them...

**Definition** (Algebraic RAM Program over $\ZZ$)**.** First, think of your garden-variety RAM machine with 1 processor and infinite memory locations (the addresses start at `0x1` and go to infinity). Here, each memory location can store an integer (instead of a bit). As usual, the memory is split between input, output and workspace. There are constant number of unique instructions and each is of the form:
1. $w = u \circ v$ where 
   - $\circ \in \{+, -, \times\}$
   - $w$ is a memory location
   - $u,v$ are memory locations or constants.
2. `goto` $\ell$ where $\ell$ is an instruction label.
3. conditioned on $u \square 0$, `branch` to $\ell$, where
   - $\square \in \{<, \leq, =\}$
   - $u$ is a memory location
   - $\ell$ is an instruction label
4. copy $u$ to $v$, where $u,v$ are memory locations.
5. dereference $*u$; that is, interpret the value of $v$ as a memory location and read from there.
6. address of $\&u$; that is, get address of $u$.
7. `return`

If you have ever taken a computer architecture course, then the above definition should look familiar. Yes, there are some gaps in my definition; if you care, try to fill them as an exercise. One important thing to note is that---unlike real processors---here, we are assuming that all these instructions take unit time ("unit cost model"). This assumption only makes out claim stronger as only going to talk about lower bounds. 

**Definition** (Nonuniform Algebraic RAM over $\ZZ$)**.** This is similar to a nonuniform family of circuits. A sequence
\begin{equation}
\A = \\{A_{n,N} : n,N \in \NN \\}
\end{equation}
of algebraic RAM programs over $\ZZ$. For an input of $n$ integers and total bitlength at most $N$ we use $A_{n,N}$.

**Definition** (Algebraic PRAM Program over $\ZZ$)**.** The P in PRAM stands for parallel. Here, the number of processors is $\poly(n,N)$. Every processor has private memory and can communicate with other processors using shared memory. As usual, we have EREW, CREW, and CRCW modes (if you don't know about these modes, forget that I mentioned them.). 

### Mulmuley's Lower Bound

As I mentioned above, I am not going to explain this result. (I don't quite understand it myself!) But I want to state it a little more formally.

**Theorem 1** (Mulmuley (1997, 1999))**.** Max-flow problem for $n$ nodes, where every edge-capacity is a nonnegative integer of bitlength at most $O(n^2)$, cannot be solved $\Omega(\sqrt{n})$ time with $2^{\Omega(\sqrt{n})}$ processors.

Here we are considering the decision version of the max-flow problem. The input also has a parameter $f_0$ and you want to decide if the max flow exceeds $f_0$. 

Mulmuley's result also holds for the constant-additive-error approximation version. Mulmuley's also extends to *PRAM with limited bit operations* where parity, left shift (by 1) and right shift (by 1) are allowed. I will elaborate on this in a forthcoming GCT post but it is super cool how you can make this model "more boolean" without fucking everything up. Roughly speaking, this is why GCT has the potential to prove boolean $\P \neq \NP$.

### Random and Quantum PRAM

Let us start by talking about Randomized PRAM. This turns out to be not that hard, just add an instruction
1. `random-branch` $\ell$ which flips a fair coin and branches to label $\ell$ if coin returns 1.

Defining quantum PRAM is equally easy, add the instruction
9. `quantum-branch` $\ell$ $\theta$ which 
   - continues with amplitude $\sin(\theta)$, and 
   - branches with amplitude $i\cos(\theta)$.

This gate is inspired by [Deutsch's (1989)](https://doi.org/10.1098/rspa.1989.0099) construction of a universal quantum gate. I am not going to get into it here, but for our purposes, it suffices to have this gate only for a fixed constant number of values of $\theta$. (For a far better definition of quantum PRAM, see [Beals et al. (2013)](https://doi.org/10.1098/rspa.2012.0686).)

**Claim.** Quantum PRAM corresponds to $\BQNC$.

Now, here is my conjecture (which I think I can prove):

**Conjecture 1.** In the PRAM model without bit operations, $\P \neq \BQNC$.

The reason this conjecture might be interesting is concerning the power of $\P^\BQNC$ which kinda models the power of near-term quantum computers. Hit me up if you want to chat about this. 

### References

Mulmuley, Ketan. “A Lower Bound for Solvability of Polynomial Equations.” In Foundations of Software Technology and Theoretical Computer Science, 13th Conference, Bombay, India, December 15-17, 1993, Proceedings, 268–83, 1993. DOI: [10.1007/3-540-57529-4\_60](https://doi.org/10.1007/3-540-57529-4_60).

---. “Lower Bounds for Parallel Linear Programming and Other Problems.” In Proceedings of the Twenty-Sixth Annual ACM Symposium on Theory of Computing, 23-25 May 1994, Montréal, Québec, Canada, 603–14, 1994. DOI: [10.1145/195058.195413](https://doi.org/10.1145/195058.195413).

---. “Is There an Algebraic Proof for P != NC? (Extended Abstract).” In Proceedings of the Twenty-Ninth Annual ACM Symposium on the Theory of Computing, El Paso, Texas, USA, May 4-6, 1997, 210–19, 1997. DOI: [10.1145/258533.258586](https://doi.org/10.1145/258533.258586).

---. “Lower Bounds in a Parallel Model without Bit Operations.” SIAM J. Comput. 28, no. 4 (1999): 1460–1509. DOI: [10.1137/S0097539794282930](https://doi.org/10.1137/S0097539794282930).

