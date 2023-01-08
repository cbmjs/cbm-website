---
layout: default
title: .ask
description: .ask
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmsearch"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmsearch"),
    title: 'search',
    preamble: "const cbmApi = require('@cbmjs/cbm-api'); const cbm = new cbmApi();",
    minHeight: "250px",
    //onLoad: (n) => n.evaluate(),
    source: "const result1 = await cbm.ask('Return all functions that take a date and convert it to time');\nif (result1.statusCode === 200) {\n    console.log('Found it!');\n}\nconst result2 = await cbm.ask('Gimme the current time');\nif (result2.statusCode === 200) {\n    console.log('Yeah!');\n}"
})</script>

## Further reading

- [Guide - Get By Meaning](./guide/gbm/)
- [API - .ask](./api/main/#ask)
