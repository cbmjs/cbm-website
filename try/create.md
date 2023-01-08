---
layout: default
title: .create
description: .create
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmcreate"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmcreate"),
    title: 'create',
    preamble: "require('fix-esm').register(); const cbmApi = require('@cbmjs/cbm-api').default; const cbm = new cbmApi(); console.warn = function noop(){};",
    nodeVersion: "18",
    minHeight: "250px",
    //onLoad: (n) => n.evaluate(),
    source: "const params = {\n  name: 'nody',\n  desc: 'a concept, but better',\n  units: ['coolness'],\n};\nawait cbm.create(params, 'concept');\n\nconst result = await cbm.lookup('nody', 'c');\nif (result.statusCode === 200) {\n  'Yaass'\n}"})</script>

## Further reading

- [Guide - Models](./guide/models/)
- [API - .call](./api/main/#create)
