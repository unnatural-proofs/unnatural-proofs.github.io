---
layout: post
title:  "Selling Quantum Computing"
author: sanketh
categories: quantum
tags: quantum-computing qc-industry
summary: tis hard to sell
comments: false
---

So... this happened a few days ago.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;While most experts agree that real-world applications of quantum are still at least several years or longer away&quot;<br><br>Make that several decades or show me one &quot;expert&quot; who says quantum computers will be commercially viable in a few years. <a href="https://twitter.com/BullshitQuantum?ref_src=twsrc%5Etfw">@BullshitQuantum</a> <a href="https://t.co/NEDqDIMKkv">https://t.co/NEDqDIMKkv</a></p>&mdash; Sabine Hossenfelder (@skdh) <a href="https://twitter.com/skdh/status/1225679502136635393?ref_src=twsrc%5Etfw">February 7, 2020</a></blockquote>

I would like to chronicle a few interesting tweets that resulted from the above tweet. As you probably know, I am a quantum optimist so the selection will be biased, but my intent is not to argue in favour of commercial quantum computing, rather to point out interesting arguments.

### Heuristics vs. Algorithms

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Hi. I&#39;m an expert. I&#39;m a Professor in the field.<br><br>I believe the first heuristic approaches may well achieve quantum advantage for approximate algorithms in less than 10y. I say that being an active practitioner and having funded this research via DARPA.<br><br>Shor = decades.</p>&mdash; Michael J. Biercuk (@MJBiercuk) <a href="https://twitter.com/MJBiercuk/status/1225968738165383169?ref_src=twsrc%5Etfw">February 8, 2020</a></blockquote>

Let's a lot to unpack here, let's start with the definition of a heuristic.

An *algorithm* is a program that solves a problem on all inputs; that is, it outputs the correct answer for every instance of the problem. In contrast, a *heuristic* is a program that solves a problem on most inputs; that is, it outputs the correct answer for most instances of the problem (typically, these instances correspond to instances that are most likely to arise in practice). To make this more concrete, let's think of the addition problem which takes a pair of numbers and outputs a number. An algorithm for addition always output the correct answer, while a heuristic outputs the correct answer for most pairs of numbers, but for some pairs of numbers it might output the wrong answer.[^heurBPP] The definition of a heuristic might seem similar to the definition of a *bounded-error algorithm*, but there is a subtle difference, a bounded-error algorithm outputs the correct answer with high-probability for *every* input. So, one could combine this property with heuristics to get bounded-error heuristics, and indeed this is what people typically mean when they say heuristics. A closer to real-life example of a heuristic is facial-recognition software.[^antivirus]

[^heurBPP]: For a more formal treatment of heuristics see: *Bogdanov, Andrej, and Luca Trevisan. "Average-case complexity." Foundations and Trends® in Theoretical Computer Science 2, no. 1 (2006): 1-106. DOI: [10.1561/0400000004](http://dx.doi.org/10.1561/0400000004). ECCC: [2006/073](https://eccc.weizmann.ac.il/report/2006/073/).*

[^antivirus]: Another good example is antivirus, see the Wikipedia article on [heuristic analysis](https://en.wikipedia.org/wiki/Heuristic_analysis).

If you have been following the field for some time, you know that we are slowing shifting from algorithms to heuristics. Some people believe that heuristics are flat-out bad---they don't know what they are talking about. Heuristics are amazing, most of the world runs on heuristics (it is hard to come up with algorithms for most real-world problems and in some cases we can prove that the general problem is NP-hard.[^np-hard]) That being said, heuristics are really hard to analyze: deep learning almost died because of this. The best way we have to work with heuristics is to code it up and run it. This means that it is hard for us to know if a quantum heuristic actually works, we can do simulations but that might not be enough to convince skeptics, or even fine-tune our program to perform better. Going back to the deep learning analogy, the field was revived by cheap GPUs which allowed researchers to test their heuristics and fine tune them.[^dl-history] Till we have large quantum computers, writing heuristics is like walking in the dark---we don't know if we have made any progress.

[^np-hard]: A lot of people look at NP-hardness as a bad thing---I don't. If someone is able to prove that real-world problem $\Pi$ is NP-hard, it means that they have formally written down $\Pi$ and then managed to show that it is at least as hard as NP-hard problem. First, let us assume that $\Pi$ is in NP, this is true for almost all real-world problems. Now, there there are two ways to solve this problem: (1) solve the NP-hard problem; that is, reduce your problem to SAT and use a SAT solver; (2) attack the formal description of $\Pi$, maybe the description is too general, we only care about some instances. So, showing NP-hardness is a step in the right direction.

[^dl-history]: See [Wikipedia](https://en.wikipedia.org/wiki/Deep_learning#History) for more on the history of deep learning. Another parallel with deep learning is the availability of data. Aside from hardware, deep learning suffered from a lack of data, this is true in quantum computing as well: we don't have enough *quantum data* (data that can be efficiently loaded into a quantum state.) You might ask, why not just turn classical data into quantum data? Well, it is not as simple, naïve algorithms for this remove any quantum speedup for some tasks. An infamous example is the [HHL algorithm](https://arxiv.org/abs/0811.3171); see, also, [Ewin Tang's classical analogue of HHL](https://arxiv.org/abs/1811.00414) and [Joe Fitzsimons's post on QRAM](http://nisqybusiness.com/2019/08/05/on-qram/).

Algorithms are nicer in this respect, we can prove stuff about their behavior without actual devices. Shor did this with his amazing factoring algorithm. This is actually not that hard, for instance, I have two papers analyzing quantum algorithms, and no quantum computers were harmed in the process.

In principle, Shor's algorithm is fast, that is, it has a polynomial-time algorithm. In practice, we care about number of qubits and number of gates more than asymptotic scaling. Actually, we don't care about asymptotic scaling (sorry, man.) Last year, Craig Gidney and Martin Ekerå [constructed](https://arxiv.org/abs/1905.09749) an optimized circuit for Shor's algorithm. Unfortunately (or fortunately) this circuit still needs on the order of a million qubits and a gate error (in trace distance) of $10^{-3}$ (which is not too crazy.) This seems out of the reach of current quantum computer chip designs and architectures. Stop whatever you are doing and go read this [awesome thread](https://twitter.com/rdviii/status/1158558531789791233?s=20) by @rdviii. Back to topic, so, yeah, millions of qubits might take a long time to get to.

### Speed isn't everything

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Complexity theory cannot explain why people still use Microsoft Excel to do business analytics in large companies with algorithms that have a guaranteed slowdown compared to the best available classical algorithms. But they do. And they pay Microsoft a lot of $$$ to do so.</p>&mdash; Christopher Savoie 佐保井 久理須 (@cjsavoie) <a href="https://twitter.com/cjsavoie/status/1226824292958162944?ref_src=twsrc%5Etfw">February 10, 2020</a></blockquote>

I really like this tweet---commercial computer science is not about stats, it is about products.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Interesting point---QCs could be commercially viable without outperforming their classical counterparts if they lead to a better product (usability, price, forward compatibility?)</p>&mdash; sanketh (@__c1own) <a href="https://twitter.com/__c1own/status/1226842926648643584?ref_src=twsrc%5Etfw">February 10, 2020</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Or energy consumption. A dil fridge runs on only 20-30 kWh with capacity to double compute power with each qubit added without adding any significant power consumption. The IBM Summit by contrast requires 15 MWh. Enough to power 7000 homes. Double the compute, double the burn.</p>&mdash; Christopher Savoie 佐保井 久理須 (@cjsavoie) <a href="https://twitter.com/cjsavoie/status/1226882619914190848?ref_src=twsrc%5Etfw">February 10, 2020</a></blockquote>

### Quantum can Quantum

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think demonstrating a quantum advantage for an application before 2030 is a reasonable prediction. I would say the initial practical impact will mostly be in industries that need to understand quantum mechanical systems better (e.g. materials/molecules), not across the board</p>&mdash; Guillaume Verdon (@quantumVerd) <a href="https://twitter.com/quantumVerd/status/1225687936609337345?ref_src=twsrc%5Etfw">February 7, 2020</a></blockquote>

This does not need any commentary. This has now become widely accepted within the community.

<hr>
