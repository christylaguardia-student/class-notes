# Tue Jul 18

## Review
* if module only has one function, just export
* you don't need a class if only one function in it
* object literal vs object factory
* you can `this` to put a function on another object
  * whats to the left of the obj when the function is called
  * arrow funtions are context-less, n `this`
```js
const obj = {
    name: 'jane',
    sayHello() { return (this ? this.name: 'no this') }
};

console.log(obj.sayHello());

const fn = obj.sayHello();
console.log(fn());

const obj2 = { name: 'bill' };
obj2.sayHello = fn;
console.log(obj2.sayHello());

console.log(fn.call({ name: 'call' }));
console.log(fn.apply({ name: 'call' }, ['hola'])); // apply uses array of parameters

const boundFn = obj.sayHello.bind(obj); // not the same fu above
console.log(boundFun());

const obj3 = {
    name: 'joey',
    doThing() {
        setTimeout() => {
            console.log('doThing', this.name); // will return undefined
        }
    }
}
```

## Event Emitters & Streams

```js
const fs = require('fs');
const stream = fs.createReadStream('./event-emitter');
stream.on('data', data => {
    console.log(data.length);
});
```
* _reponse_ is a write stream
* _request_ is a read stream
* pipe: read each chunk and feed to to the next one

`npm i mocha chai chai-http -D`

```js
// event emitters without using node events
// const ee = require('events');
class EE {
    constructor() {
        //this.handler = null;
        //this.handlers = [];
        this.events = {};
    }
    on(event, handler) {
        //this.handlers.push(handler);
        //this.events[event] = handler;
        if(!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(handler);
    }
    emit(event) {
        //this.handlers.forEach(handler => handler());
        this.events[event].forEach(handler => handler());
    }
}

describe('ee', () => {
    it('emits event to the registered handler', () => {
        const ee = new EE();
        ee.on('foo', () => {
            done();
        });
        ee.emit('foo');
    })
});

// see class example for other tests

```

* above code is more node fundamentals, leading up to using express

vs code intent: select all, cmd + k + f