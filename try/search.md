---
layout: default
title: .search
description: .search
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmsearch"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmsearch"),
    title: 'search',
    preamble: "import cbmApi from '@cbmjs/cbm-api'; const cbm = new cbmApi();",
    nodeVersion: "18",
    minHeight: "250px",
    //onLoad: (n) => n.evaluate(),
    source: "const result = await cbm.search({\n    'inputConcepts': 'date',\n    'outputConcepts': 'time',\n});\nif (result.statusCode === 200) {\n    console.log('Found it!');\n    result.body\n}"
})</script>

## Further reading

- [Guide - Get By Meaning](./guide/gbm/)
- [API - .search](./api/main/#search)
