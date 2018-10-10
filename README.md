<p align="center">
    <h1 align="center">ns-suitescript-mocks</h1>
</p>

<p align="center">
    <a href="https://circleci.com/gh/mycsHQ/ns-suitescript-mocks"><img src="https://badgen.net/circleci/github/mycsHQ/ns-suitescript-mocks" /></a>
    <a href="https://github.com/airbnb/javascript"><img src="https://badgen.net/badge/code%20style/airbnb-base/green" /></a>
    <a href="LICENSE"><img src="https://badgen.net/github/license/mycshq/ns-suitescript-mocks" /></a>
    <a href="http://makeapullrequest.com"><img src="https://badgen.net/badge/PRs/Welcome/green" /></a>
    <a href="https://codecov.io/gh/mycshq/ns-suitescript-mocks"><img src="https://codecov.io/gh/mycshq/ns-suitescript-mocks/branch/master/graph/badge.svg" /></a>
</p>
<p align="center">
    <a href="https://nodei.co/npm/ns-suitescript-mocks/"><img src="https://nodei.co/npm/ns-suitescript-mocks.png" /></a>
</p>

<p align="center">This module contains a collection of mocks that can be used to improve unit-tests for SuiteScript 2.0.</p>

## Disclaimer ⚠️

This module is in its early stage and is very opinionated to fit our own needs. We plan to make it more flexible to work with more codebases.  
Suggestions are more than welcome 🎊  
If you are looking for a way to test your suitescript codebase and this module doesn't fit your use-case, [let us know anyway](https://github.com/mycsHQ/ns-suitescript-mocks/issues/new), we'd love to have a setup that works for everyone.

## Getting started 🚀

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

3. Write your code and use these mocks

`Examples can be found in 'Examples folder in repo!'`

## Contribute 💻

Any contribution is more than welcome 🎉

We are using [Airbnb base](https://github.com/airbnb/javascript) style, make sure you have ESLint/Standard plugin on your editor and have autofix enabled.

Feel free to modify and [send us a PR](https://github.com/mycsHQ/ns-suitescript-mocks/compare?expand=1), we'll review and hopefully merge it.
Before pushing your code, make sure that the tests are passing (at the moment, we only have `eslint`).

## Authors 😎

* **Damian Królikowski** - *Mocks Creator* - [damiankrolikowskimycs](https://github.com/damiankrolikowskimycs)
* **Łukasz Kubasiewicz** - *Mocks Creator* - [lukaszMycs](https://github.com/lukaszmycs)
* **Nicolas Ritouet** - *Automation setup, cleanup, documentation* - [nicolasritouet](https://github.com/nicolasritouet)

See also the list of [contributors](https://github.com/mycshq/ns-suitescript-mocks/contributors) who participated in this project.

## License 🔓

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Roadmap 🛣

- ~~add examples for jest~~
- cleanup mycs occurences
- ~~add tests for the repo~~
- automate release process
- add example for other test frameworks

If you want to contribute and don't know where to start, we label our issues with [`help wanted`](https://github.com/mycsHQ/ns-suitescript-mocks/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) or [`good first issue`](https://github.com/mycsHQ/ns-suitescript-mocks/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), feel free to browse the issues and ask for more information.
