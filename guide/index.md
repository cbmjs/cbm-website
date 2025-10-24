---
layout: default
title: General
---

{% include guide-tabs.html %}

> The default instance of the server runs (or not, feel free to check 🤷🏼‍♂️) on<br>`https://call-by-meaning.onrender.com`

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

## Example Projects

Real-world applications built with cbmjs:

### cbm-clock

A simple one-page app that displays an analog clock, demonstrating the cbmjs workflow.
- **Live demo**: [https://cbm-clock-demo.onrender.com/](https://cbm-clock-demo.onrender.com/)
- **Source code**: [https://github.com/cbmjs/cbm-clock](https://github.com/cbmjs/cbm-clock)

### cbm-sherlock

A script that uses cbmjs to deduce 🕵🏼 the number of characters appearing in "The Adventures of Sherlock Holmes: A Scandal in Bohemia".
- **Source code**: [https://github.com/cbmjs/cbm-sherlock](https://github.com/cbmjs/cbm-sherlock)

