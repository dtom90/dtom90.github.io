---
layout: project
title: Red Eléctrica de España
description: "Electrical demand prediction and planning system"
image: /images/REE/decision_optimization.png
repo: IBM-DSE/sustainable-electric-power-planning
---

The Canary Islands’ electricity network is isolated from the mainland grid, so Red Eléctrica de España needs to balance local generation with demand to provide a reliable supply to homes and businesses. The company is piloting IBM® Watson® Studio Local with IBM Decision Optimization (CPLEX®) to streamline the process of modeling and optimizing supply and demand.

![Decision Optimization Dashboard]({{ page.image }})

In order to render and analyze the prediction and optimization results, a dashboard was built using JavaScript and D3 to display a heatmap of the optimization solutions (above) and a zoomable graph of the electrical demand prediction (below)

![Demand Prediction Dashboard](/images/REE/demand_prediction.png)

<br/>

{% include external_link.html text="Case Study" link="https://www.ibm.com/case-studies/red-electrica-de-espana-hybrid-cloud-data-science" %}

<br/>

## Technology

<div class="flex">
{% include tech_link.html tech="Python" link="https://www.python.org/" hideName=true %}
{% include tech_link.html tech="Jupyter" link="https://jupyter.org/" hideName=true %}
{% include tech_link.html tech="pandas" extension="svg" link="https://pandas.pydata.org/" hideName=true %}
{% include tech_link.html tech="scikit-learn" extension="svg" link="https://scikit-learn.org/" hideName=true %}
{% include tech_link.html tech="D3" extension="svg" link="https://d3js.org/" hideName=true %}
</div>

<br/>
