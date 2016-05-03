---
layout: post
title: Computer Science explained with unicorns - Vectorization
locale: en
categories:
  - computerscience
  - humor
section: computerscience
permalink: unicorn-vectorization
---
<h2>Vectorization</h2>

<p>Vectorization is the action of converting (either manually or automatically) a program processing some kind of data (here a unicorn), into a program processing a vector of these data.</p>
<p class="text-center"><img src="/resources/uploads/vectorisation-lowq.gif" alt="vectorisation-lowq"/></p>
<p>
Recent processors can do arithmetic operations on very large data (up to 512 bits for the Xeon Phi), but the largest datatype in C is 64 bits : therefore each non-vectorized operation loses at least 448 bits. The idea is to merge as many data as possible in this 512 vector, and then do a single operation on it instead of multiple operations on almost empty vectors.<br />
As shown on the picture, it's fastest to add up the 8 unicorn parts with a vectorized program !
</p>

