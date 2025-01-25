---
layout: page
permalink: /publications/
title: Research
description: 
pub_years: [2025, 2024, 2023, 2022]
preprint_years: [2024]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
Authors indicated by a (*) indicate equal contribution listed in alphabetical order, as is customary in theoretical computer science. 

<h2> Preprints </h2>
<div class="publications">
{%- for y in page.preprint_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f preprints -q @*[year={{y}}]* %}
{% endfor %}
</div>

<h2> Conference and journal publications </h2>
<div class="publications">


{%- for y in page.pub_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>



