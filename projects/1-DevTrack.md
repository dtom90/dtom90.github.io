---
layout: project
title: DevTrack
description: "An app for productive developers"
image: /images/DevTrack/Home.png
repo: dtom90/DevTrack
---
A desktop application built to help developers be more productive

![DevTrack Dashboard]({{ page.image }})

<br/>

#### App Features:
- Task management with tagging, reordering, and filtering
- Note taking with markdown support
- Timer for [pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique){:target="_blank"} or other time management schemes
- Activity logging, visualization, and targeting

![DevTrack Activity](/images/DevTrack/Dashboard.png)

{% include external_link.html text="Web Demo" link="https://davidthomason.com/DevTrack/" %}

<p style="text-align: center; font-size: 24px;">
    <a href="https://github.com/dtom90/DevTrack/releases/latest" target="_blank" class="{{ include.class }}">
        <span>Download Page </span>
    </a>
</p>

## Technology

<div class="flex">
{% include tech_link.html tech="Vue.js" imgName="Vue" link="https://vuejs.org/" %}
{% include tech_link.html tech="Electron" link="https://electronjs.org/" %}
</div>