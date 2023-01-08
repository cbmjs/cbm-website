---
layout: default
title: .getCode
description: .getCode
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmcode"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmcode"),
    title: 'getCode',
    preamble: "const cbmApi = require('@cbmjs/cbm-api'); const cbm = new cbmApi();console.warn = function noop(){};",
    minHeight: "250px",
    //onLoad: (n) => n.evaluate(),
    source: "const code = cbm.getCode('capitalize.js');\nconst cap = eval(code);\ncap(\"hElLo I'm NaPoLeOn.\")\n"})</script>
<br>
## Further reading

- [Guide](./guide/)
- [API - .getCode](./api/helper/#getCode)
