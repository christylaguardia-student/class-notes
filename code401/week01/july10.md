# Mon Jul 10

_Competency > Proficiency > Fluency_

Process - dedicated memory space where app/prgm runs

Libaries are like tools, they don't work by themselves

need to update node to v8
```
npm init
npm install eslint --save-dev
npm install mocha --save-dev
```
.eslint
.gitignore
.trais.yml


run mocha tests

const assert = require('assert'); // const js, pull in module from other file
```
describe('a suite of these tests', () => {
	it('runs a test', () => {

	})
})
```

npm run test
```
in package.json
	"test": "mocha test",
	"start": "mocha tests -w"
```


TDD: red -> green -> refactor

---

LAB

install stuff
npm init
npm i eslint mocha -D

add to package.json script
    "test": "mocha tests",
    "start": "npm test -- -w"

start live testing in terminal
npm test

don't forget
module.exports = calculator;

create these files
.eslintrc

{
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "warn",
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}

.gitignore

node_modules
DS_Store


.travis.yml
language: node_js
node_js:
  - "8"