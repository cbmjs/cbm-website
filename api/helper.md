---
title: Helper Functions
layout: default
class: apidoc
---

{% include api-tabs.html %}

### <a name="getURI"></a> cbm.getURI(text)

This method finds out what the cbmjs URI is for a given text, applying steps such as reducing English words to their root form and removing special characters.

Example code:

```javascript
cbm.getURI('a (big) dog!'); //-> big_dog
```

### <a name="getCode"></a> cbm.getCode(fileName)

This method acts as a small helper to the usage of `.search` and `.call` methods. It takes the `name` of a .js file in the server and returns its code in plain text.

Example code:

```javascript
let code = cbm.getCode('getTime.js');
const getTime = eval(code);
getTime();
```
