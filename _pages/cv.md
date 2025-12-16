---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
  <ul>{% for post in site.education reversed %}
    {% if post.no_cv != true %}
      {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}</ul>

Work experience
======
- Summer Research: Research on innovative technology of CAD modeling in industrial simulation software (工业仿真软件中CAD建模创新技术研究)
  
Skills
======
- Python
- C++
- Golang (learning)
- Linux
- Useful tools: Docker, Git, Vim

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul> -->
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->
