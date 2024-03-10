---
layout: page
permalink: /publications/
title: publications
description: 
pub_years: [2024, 2023, 2022]
preprint_years: [2019]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

Authors indicated by a (*) indicate equal contribution listed in alphabetical order, as is customary in theoretical computer science. 

{%- for y in page.pub_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
<h1> preprints </h1>
<div class="publications">
{%- for y in page.preprint_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f preprints -q @*[year={{y}}]* %}
{% endfor %}
</div>


