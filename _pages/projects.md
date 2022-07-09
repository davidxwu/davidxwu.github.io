---
layout: page
permalink: /projects/
title: projects
description: here are some random (course) projects I've worked on. rigor of math is not guaranteed so proceed at your own risk!
nav: true
nav_order: 2
---

### High probability generalization bounds for weakly stable learning algorithms
In the analysis of generalization bounds for machine learning algorithms, a central theme is the notion of algorithmic stability --- a measurement of how sensitive a learning algorithm is to perturbations to its input. The notion of _uniform stability_, first introduced by Bousquet et al., is a worst case metric for how much an algorithm depends on the training data. Uniform stability can be used to bound the generalization error with high probability, although it wasn't until recently that these results were tight in all regimes. Inspired by this line of work, we investigate sharp high probability generalization bounds for a _relaxed_ notion of stability, one that allows for low probability deviations from a worst case stability guarantee.

[Final project]({{ site.url }}/assets/pdf/18_408_Final_Project.pdf) for 18.408 (Theory of Deep Learning), taught by Prof. Ankur Moitra in Spring 2021. 

### Approximate edit distance in subquadratic time 
Edit distance can be naively computed in $$O(n^2)$$ using dynamic programming. Can we do better than this? In fact, there are several strong hardness results proving lower bounds against a _truly_ subquadratic algorithm. However, finding approximate edit distance is  a different story. In this project we survey two recent advances which present genuine subquadratic approximation algorithms, albeit in slightly different problem settings. 

[Final project]({{ site.url }}/assets/pdf/6_856_Paper.pdf) for 6.856 (Randomized Algorithms), taught by Prof. David Karger in Spring 2021. 

### Derandomization of undirected $$s-t$$ connectivity

Given an input an undirected graph $$G$$ and two vertices $$s$$ and $$t$$, the undirected $$s-t$$ connectivity problem, called USTCON, asks whether or not the two vertices have a path connecting them. The time
complexity to solve this problem is well-known to be linear with your favorite graph search algorithm (i.e. BFS or DFS). However, both of these algorithms require a linear space complexity as well. In fact, it is known that there exist randomized algorithms which only use _logarithmic_ space to solve USTCON. The question then arises on whether or not it is possible to construct _deterministic_ algorithms which use logarithmic space. In this paper, we survey the beautiful result of Reingold '08 to answer the question in the affirmative. 

[Final project]({{ site.url }}/assets/pdf/18_434_Final_Project.pdf) for 18.434 (Seminar in TCS), taught by Prof. Dor Minzer in Fall 2021. 
