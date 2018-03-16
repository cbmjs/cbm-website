---
title: General
layout: default
class: apidoc
---

{% include api-tabs.html %}

To require the module in a project, we can use the expression:

``` javascript
const CallByMeaning = require('@cbmjs/cbm-api');
```

The module exports a single constructor which can be used to open an API connection. Simply call it and store the expression result in a variable:

``` javascript
const cbm = new CallByMeaning();
```

In case that you are running your own copy of the cbmjs server, the constructor takes the hostname of the server as an optional argument. The default option evaluates to "[https://call-by-meaning.herokuapp.com](https://call-by-meaning.herokuapp.com/)".

``` javascript
CallByMeaning(host);
```

## Example

``` javascript
const cbm = new CallByMeaning('http://localhost:3000');
```

## Unit Tests

Run tests via the command `npm test`