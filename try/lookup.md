---
layout: default
title: .lookup
description: .lookup
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmlookup"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmlookup"),
    title: 'lookup',
    preamble: "import cbmApi from '@cbmjs/cbm-api'; const cbm = new cbmApi();",
    nodeVersion: "18",
    minHeight: "250px",
    //onLoad: (n) => n.evaluate(),
    source: "const result = await cbm.lookup('time', 'c');\nif (result.statusCode === 200) {\n    console.log('Found it!');\n    result.body\n}"
})</script>

## Further reading

- [Guide - Get By Name](./guide/gbn/)
- [API - .lookup](./api/main/#lookup)
