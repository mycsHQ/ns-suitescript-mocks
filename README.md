# ns-suitescript-mocks

[![CircleCI branch](https://badgen.net/circleci/github/mycshq/ns-suitescript-mocks.js)](https://circleci.com/gh/mycsHQ/ns-suitescript-mocks)
[![Eslint Codestyle](https://badgen.net/badge/code%20style/airbnb-base/green)](https://github.com/airbnb/javascript)
[![License](https://badgen.net/badge/license/MIT/blue)](https://github.com/mycsHQ/ns-suitescript-mocks/blob/master/LICENSE)  

[![NPM](https://nodei.co/npm/ns-suitescript-mocks.png)](https://nodei.co/npm/ns-suitescript-mocks/)

> This module contains a collection of mocks that can be used to improve unit-tests for SuiteScript 2.0.

## Getting started

1. Install this module as a dependency:  

```shell
npm i ns-suitescript-mocks --save-dev
```

2. Import the module in your test framework init file (`jest.init` for example)

```javascript
const netsuiteMocks = require('ns-suitescript-mocks')(
  {
    utils: ('external-librairies-path'),
  });
global.define = netsuiteMocks.define;
global.mockups = netsuiteMocks.nsMockups;

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* **Damian Krolikowski** - *Initial work* - [damiankrolikowskimycs](https://github.com/damiankrolikowskimycs)

See also the list of [contributors](https://github.com/mycshq/ns-suitescript-mocks/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## TODO

- add tests for the repo
- switch all eslint warning to errors and fix code
- cleanup mycs occurences
- remove global specific mocks (like `getGELlabel`) and give possibility to import them from config (with example)
