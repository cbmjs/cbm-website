---
layout: default
title: General
---

{% include guide-tabs.html %}

> The default instance of the server runs on `https://call-by-meaning.herokuapp.com`

## GitHub

#### [cbmjs/cbm-engine](https://github.com/cbmjs/cbm-engine)

## Run locally

```bash
git clone https://github.com/cbmjs/cbm-engine.git cbm-engine
cd cbm-engine
npm install
DB_HOST=mongodb://user:pass@host:port/callbymeaning npm start
```

Default host is `http://localhost` and port is 3000 but you can change that by specifying a PORT env variable.

If mongo is local, you only need to specify the name of the database by using the DB env variable, instead of the DB_HOST.

## Unit Tests

Run tests via the command `npm test`
