---
pagination:
  data: testdata
  size: 1
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: "dir/{{pagination.items[0] | slug}}/index.html"
--- 

<ol>
{%- for item in pagination.items %}
  <li>{{ item }}</li>
{% endfor -%}
</ol>