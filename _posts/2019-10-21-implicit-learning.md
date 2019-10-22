---
layout: post
title: Implicitly Learning to Reason in First-Order Logic
tags: [Logic, Learning, Query answering]
published: false
---

This paper {% cite implicit-learning-2019 %} considers the problem of answering queries about first order logic (FOL) formulas based on background knowledge partially represented explicitly as other formulas, and partially represented as examples independently drawn from a fixed probability distribution.

<!--more-->

Idea
---

Probably approximately correct (PAC) learning is a branch of machine learning that studies function inference under polynomial time complexity contraints with respect to the probability of getting an approximately correct answer. More precisely, complexity scales polynomially the more precise the approximation is and the more probable the answer is to lie within that approximation.

<!-- First order logic is widely argued to be most appropriate for representing human knowledge (e.g., [McCarthy and Hayes, 1969; Moore, 1982; Levesque and Lakemeyer, 2001]). -->

The paper starts off by defining a first order logic language with connectives $$\{\neg , \lor , \land , \forall , \exists , \Rightarrow , = \}$$ and a countably infinite set of constants, such as $$\mathbb{N}$$. 

<!-- Note: as the authors explain, this domain of names implies that the compactness property does not hold (a set of formulas is not satisfiable necessarily if every finite subset is) because of cases such as $$\{ \exists P(x) , \neg P(1) , \neg P(2) , ... \}$$. -->

Their knowledge bases are defined as a finite, non-empty set of $$\forall$$-clauses. A $$\forall$$-clause is a formula of the form: 

$$ \forall x_1 ... \forall x_k \ ( e \Rightarrow a_1 \lor ... \lor a_n )$$

Where:
- $$a_i$$ are atoms.
- $$e$$ is a formula built using: (i) equalities of the form $$(x=c)$$ with $$x$$ variable and $$c$$ constant; (ii) the logical connectives $$ \{ \neg , \forall , \exists \} $$.
- $$ x_1 ... x_k$$ are all the free variables of $$e \Rightarrow a_1 \lor ... \lor a_n$$.

For example:

$$KB = \{ \forall x (Grad(x) \lor Prof(x)) , \ \forall x ((x \neq 1) \Rightarrow Grad(x)) \}$$

As such, this knowledge bases are able to represent consistent sets of infinite ground clauses.

The rank of a knowledge base is the maximum amount of universal quantifiers present in any of its clauses.

<!-- Now, any formula $$\alpha$$ that is provable in this KB makes $$GND^-(KB \land \neg \alpha)$$ unsatisfiable where $$GND^-$$ is the universal grounding of the set of formulas up until the maximum amount of quantifiers in any formulas in KB or those contants already present in KB. -->

A **model** of a KB is a consistent mapping from all possible grounded atoms to $$\{ true , false \}$$ that satisfies the formulas of KB. A **partial model** of model $$M$$ of KB is a mapping $$N$$ from all possible grounded atoms to $$\{ true , false , * \}$$ that is consistent with the model i.e. $$ \forall p \ N[p] \neq * \Rightarrow N[p] = M[p] $$.

Let $$N$$ be a partial model of the KB, a ground formula is **witnessed** to be true iff it is true in $$N$$. Next, a $$\forall$$-clause $$\forall \hat x \theta(\hat x)$$ is witnessed true in a partial model $$N$$ for the set of constants $$C$$ if for every binding of $$\hat x$$ to constants $$\hat c \in C$$, the resulting ground clause $$\theta(\hat c)$$ is witnessed true in $$N$$.

<!-- Given a distribution $$D$$ over all possible models of KB, a masking process $$\Theta$$ is a function that maps a distribution over the models of KB, to a distribution over partial models of KB, i.e. $$\Theta (D)$$ is a distribution over partial models of KB. -->


How
---


<!-- img -->
<!-- ![useful image]({{ site.url }}/public/img/gnn/6.png) -->

References
---

{% bibliography --cited %}