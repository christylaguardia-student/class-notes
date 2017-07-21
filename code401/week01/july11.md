# Tue Jul 11

## Lab feeback
* on own fork - ok to merge locally
* get to know array methods

---

## Function definition vs execution

* functions are objects
* function definition = the variable
* arguments = the actual values in the parenthesis
```js
const callback = x => x*x;

[1,2,3].map(callback); \\ pass this function as the mapping function

function outer(x) {
	return function inner(y) {
		return x + y;
	}
}

console.dir(fn)
```

* function declaration = when name of the function, these are in scope
* function expression = when you use a function and set as something
* anonymous function expression = no name

---

## Array lab

```js
const assert = require('assert');
const { mapm forEach } = require('../../array-methods');
describe('array methods', () => {
	function testIndex(fn) {
		const array = [1,2,3];
		const indexes = [];
		fn(array, (x,i) => indexes.    )
		assert.deepEqual(mapped, [1,2,3]);
	};

	it ('map', () => {
		const array = [1,2,3];
		const mapped = map(array, x => x * x);
		assert.deepEqual(mapped, [1,4,9])
	});

	it ('map passes index as second arg', () => {
		const array = [1,2,3];
		const mapped = map(array, (x, i) => i);
		assert.deepEqual(mapped, [0,1,2])
	});

	it ('for each', () => {
		const array = [1,2,3];
		const called = [];
		forEach(array, x => called.push(x));
		assert.deepEqual(called, array);
	});

	it ('for each passes index as second arg', () => {
		testIndexes(forEach);
		const array = [1,2,3];
		const indexes = [];
		forEach(array, (x, 1) => indexes.push(i));
		assert.deepEqual(indexes, [0,1,2]);
	});

	it('filter', () => {
		const array = [1,2,3];
		const oddNumber = filter(array, x => x%2 === 1)
		assert.deepEqual(oddNumber, [1,3])
	});
})

function map(array, callback) {
	const mapped = [];
	for (let i = 0; i < array.length; i++) {
		mapped[i] = callback(array[i], i);
	}
	return mapped;
}

function foreach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

function filter(array, callback) {
	const filtered  = [];
	for (let i=0, i)
}

module.exports = { map, foreach };
```

* use lib folder
* stick with a single module.export = ...
* destructing ?

---

## Modules

module.export =
= require()

module exports are cached - like saves the export and uses for next time;

if require file must use ./filename

always set the variable name to the package name
const cool = require('cool-ascii-faces');

npm packages - check the date, stars & issues on github
install globally stuff you use like utilities

---

## Lab

```
const list = [];
const dictionary = {};

// object literal version
const store = {
	get(id) {},
	getAll() {},
	save(object) {},
	remove(id) {}
};

module.exports = store;

// revealing module function version
module.exports = {
	get(id) {},
	getAll() {},
	save(object) {},
	remove(id) {}
}
```
---
```
const createStore = require('object-literal-factory'); // can't do this twice
const carStore = createStore;
const museumStore = createStore;

const Store = require('class');
```
---

```
// class version
class Store {
	constructor() {
		this.foo = foo;
	}
	get(id) {
		get(id) {

		}
		getAll() {

		}
		save(object) {

		}
		remove(id) {

		}
	}
}

module.exports = Store;
```

## Lab review
* where to start?
* test the simplest thing
* save
  * how to generate ids
    * shortid npm
	* how to use shortid
	  * npm install --save shortid

* create a sandbox.js file for testing the shortid, add it to .gitignore