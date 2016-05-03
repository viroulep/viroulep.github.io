---
layout: post
title: L'informatique expliqué avec des licornes - La vectorisation
locale: fr
categories:
  - informatique
  - humour
section: computerscience
permalink: licorne-vectorisation
---

<h2>La vectorisation</h2>
<p>Vectoriser un programme consiste à transformer, automatiquement ou non, une opération s'appliquant sur une donnée (ici une licorne) en une opération s'appliquant sur un vecteur de données.</p>
<p class="text-center"><img src="/resources/uploads/vectorisation-lowq.gif" alt="vectorisation-lowq"/></p>
<p>
<br />
Les machines récentes peuvent effectuer leurs opérations arithmétiques sur des nombres de grandes tailles (disons 512 bits pour les Xeon Phi), alors que la taille du plus gros type de base en C est de 64 bits : on perd alors au moins 448 bits à chaque opération non vectorisée. L'idée est donc de "fusionner" le maximum de données possible dans ce vecteur de 512 bits, afin d'effectuer une seule opération dessus plutôt que plusieurs sur des parties de vecteur.<br />
Et comme on le voit sur l'image, cela va plus vite d'additionner les 8 parties de licornes avec un code vectorisé !</p>
<p>Merci à Mathias mon co-bureau pour ses conseils esthétiques :)</p>
