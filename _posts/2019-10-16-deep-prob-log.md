---
layout: post
title: DeepProbLog
published: false
---

The paper proposes DeepProbLog, a combination of probabilistic logic programming and neural networks. In probabilistic logic programs, each grounded atom represents a boolean random variable. The integration is achieved by considering neural networks that output a probability distribution that can be associated to a logic rule construct such as a probabilistic fact or annotated disjunction and, in turn, to ground facts for so called neural predicates. Inference can then be performed by computing the probability of the atoms for neural predicates by forward evaluation of the network and then by classical logic programming substitution finding for query answering. Learning is performed by gradient descent using algebraic ProbLog which integrates optimization for the neural network and probability distributions for logic facts in the same pipeline.

<!--more-->

How
---
