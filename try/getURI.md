---
layout: default
title: .getURI
description: .getURI
---

{% include example-tabs.html %}

Change the code below freely, click run, and you'll see the result.

<script src="https://embed.runkit.com"></script>
<div id="cbmuri"></div>
<script>var notebook = RunKit.createNotebook({
    element: document.getElementById("cbmuri"),
    title: 'getURI',
    preamble: "import cbmApi from '@cbmjs/cbm-api'; const cbm = new cbmApi();",
    nodeVersion: "18",
    minHeight: "350px",
    //onLoad: (n) => n.evaluate(),
    source: "const result = cbm.getURI('(the) big !! dog?!');\nresult"
})</script>
<br><br>
## Further reading

- [Guide](./guide/)
- [API - .getURI](./api/helper/#getURI)
