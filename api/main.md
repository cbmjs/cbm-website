---
title: Main Functions
layout: default
class: apidoc
---

{% include api-tabs.html %}

### <a name="lookup"></a> cbm.lookup(uri[, type])

This method expects a valid cbmjs URI as its first argument.
`type` is an (optional) string that specifies the type of the GET request. It can have the keys `c`, `f` or `r`. This method is asynchronous and returns a promise that, when fulfilled, returns an object with two properties.`statusCode` which contains the status code of the request and `body` that holds the result set from the query.

Example code:

```javascript
cbm.lookup('time', 'c').then((result) => {
  if (result.statusCode === 200) console.log('Success!');
  // insert code here
}).catch((error) => console.error(error));
```

### <a name="search"></a> cbm.search(...args)

This method finds all the functions that correspond to given concepts and returns an array containing them. It can be called with two different ways. Either by providing only an object containing the search parameters or by providing the parameters themselves as arguments. This method is asynchronous and returns a promise that, when fulfilled, returns an object with two properties.`statusCode` which contains the status code of the request and `body` that holds the result set from the query. For a full overview of search parameters, check the [documentation](./guide/gbm/).

Example code:

```javascript
cbm.search({'inputConcepts': 'date', 'outputConcepts': 'time'}).then((result) => {
  if (result.statusCode === 200) console.log('Success!');
  // insert code here
}).catch((error) => console.error(error));

cbm.search('date', 'time'}).then((result) => {
  if (result.statusCode === 200) console.log('Success!');
  // insert code here
}).catch((error) => console.error(error));
```

### <a name="call"></a> cbm.call(...args)

This method takes the search parameters and after finding an appropriate function - a function with the same concepts as inputs and outputs, but (maybe) in different units, that is - executes it and returns the result. If the (optional) argument `returnCode` is set to true, it instead returns the .js file's name and the description of the function. It can be called with two different ways. Either by providing only an object containing the search parameters (and maybe the optional returnCode as a second argument) or by providing the parameters themselves as arguments. This method is asynchronous and returns a promise that, when fulfilled, returns an object with two properties.`statusCode` which contains the status code of the request and `body` that holds the result set from the query. For a full overview of search parameters, check the [documentation](./guide/cbm/).

Example code:

```javascript
const bday = new Date(1994, 2, 24);

cbm.call({
  'inputConcepts': 'date',
  // 'date' doesn't have a unit, so we can omit it, or pass {'inputUnits': null} or {'inputUnits': []} or {'inputUnits: '-'} or {'inputUnits': 'date'}
  'inputVars': bday,
  'outputConcepts': 'time',
  'outputUnits': 'seconds'
}.then((result) => {
  if (result.statusCode === 200) console.log('Success!');
  // insert code here
}).catch((error) => console.error(error));

cbm.call('date', null, 'time', 'seconds').then(...);
cbm.call('date', null, 'time', 'seconds', true).then(...); // If we want the source code
```

### <a name="ask"></a> cbm.ask(query)

This method finds all the functions that correspond to given concepts and returns an array containing them. It can be called using by providing a query in __100% Natural Language__. This method is asynchronous and returns a promise that, when fulfilled, returns an object with two properties.`statusCode` which contains the status code of the request and `body` that holds the result set from the query.

<span class="tag red">Warning</span> The underlying model is in a very early stage of its training.

Example code:

```javascript
cbm.ask('Return all functions that take a date and convert it to time').then((result) => {
  if (result.statusCode === 200) console.log('Success!');
  // insert code here
}).catch((error) => console.error(error));
```

### <a name="create"></a> cbm.create(params[, type])

This method creates a document in the server if it doesn't exist or modifies it, if it does. It accepts a `params` object with the [document parameters](./guide/models/) as its first argument and a string containing the type of the document. It can be one of `concept`, `function`, `relation`. If it isn't provided, it defaults to `concept`. This method is asynchronous and returns a promise that, when fulfilled, returns a boolean, depending of its success.

Example code:

```javascript
let params = {
  name: 'aConcept',
  desc: 'aDescription',
};
cbm.create(params);
```

```javascript
let params = {
  name: 'aFunction',
  desc: 'aDescription',
  argsNames: 'someArg',
  argsUnits: 'someUnit',
  returnsNames: 'someReturn',
  returnsUnits: 'someUnit',
};
cbm.create(params, 'function');

params.codeFile = __dirname.concat('/someFile.js');
(async () => {
  let res = await cbm.create(params, 'function');
  return res;
})().then((res) => console.log(res));
```

```javascript
let params = {
  name: 'unitConversion',
  start: 'meters',
  end: 'feet',
  mathRelation: '0.3 * start'
}
cbm.create(params, 'relation')
```
