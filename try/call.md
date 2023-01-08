---
layout: default
title: .call
description: .call
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmcall"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmcall"),
    title: 'call',
    preamble: "import cbmApi from '@cbmjs/cbm-api'; const cbm = new cbmApi();",
    nodeVersion: "18",
    minHeight: "250px",
    //onLoad: (n) => n.evaluate(),
    source: "const result = await cbm.call({\n    'inputConcepts': 'array',\n    'inputVars': [[1,1,1,1,2,2,2,3,3,3,4,4,5,6,7]],\n    'outputConcepts': 'array',\n    'outputUnits': 'unique'});\nif (result.statusCode === 200) {\n    console.log('Found it!');\n    result.body\n}"
})</script>

## Further reading

- [Guide - Call By Meaning](./guide/cbm/)
- [API - .call](./api/main/#call)
