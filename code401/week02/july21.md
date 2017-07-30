# Fri Jul 21

## Whiteboarding

longest word

```js
function longestWord(sen) {
    const words = sen.split(' ');
    words.sort((a,b) => a.length - b.length); // sort by length of word
    return words[0];
}
// better way

function(sen) {
    const words = sen.split(' ');
    let longest = '';
    for(let i=0, i...) {
        if word.leng...
    }
}
```

most used letter
* use dictionary obj

```js
function mostUsedLetter(sen) {


}


// another way
dict = {};

Object.keys(dict).reduce((longest, key)) => {
    const count = dict(keys)
    return count>longest.count ? {key, count} longest;
}


```

*tip: use a magic function, like strLength(word);*

---

## Classes

```js
const reverser = new Reverser();

reverser.add('Hello');
reverser.add('World');
reverser.reverse();
// 'World Hello'


// create class
class Reverser {
    // initalized data structures you need
    constructor() {
        this._list = []; //_list is private
    }

    // add the methods you need
    add(word) {
        this._list.unshift(word);
    }

    reverse({
        this._list.uhoi('')
    })

}

```
---

## Stacks and Queues

Stack | Queue
-|-
LIFO (last in first out) | FIFO (first in first out)
push, pop, peek | enqueue, dequeue (hasNext)
vertical|horizontal

```js
hasNext() {
    return !!this.array.length...
}
```

---
next week:
* 1:1 on monday
* class 1:30-4:30
* get to codewars 25pts

week 5 first project, backend, teams of 3
