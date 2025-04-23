---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm pursuing his dual Bachelor's degree in Electrical Engineering from Zhejiang University and University of Illinois at Urbana-Champaign.

Education
===
<ul>{% for post in site.education reversed %}
  {% if post.no_cv != true %}
    <li> {{ post.title }}, {{ post.type }}, {{ post.venue }}, {{ post.display_date | default: post.date | default: "1900-01-01" }}</li>
  {% endif %}
{% endfor %}</ul>

Interests
===
- Machine Learning
- Power System Optimization
