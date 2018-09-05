# netsuite-mockups
Mocks for Netsuite ERP.

// TODO: Add mandatory informataion to README


## Installation


Using npm:
```shell
$ npm i -g npm
$ npm i netsuite-suitescript-mocks
```

In Node.js:
```js
const netsuiteMockups = require('netsuite-suitescript-mocks')(
  {
    utils: ('external-libriaries-path'),
  });
global.define = netsuiteMockups.define;
global.mockups = netsuiteMockups.nsMockups;

```

**Note:**<br>
Install [netsuite-suitescript-mocks](https://www.npmjs.com/package/netsuite-suitescript-mocks) for NS-Mocks use in the Node.js < 4 REPL.
