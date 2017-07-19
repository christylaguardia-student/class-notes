# Mon Jul 17

## JavaScript Functional Patterns

### Functional programming
* synchronous
* `array.map(x => x * x);`
* happens 0 to n times
* each line executes before

### Callbacks
* asynchronous
* `fs.readFile('foo.txt', (err, buffer) => {...})`
* happens once and only once
* promises only apply to this category

### Event emitters
* (sync to) asynchronous (observers)
* happens 0 to n times

---

## HTTP Server

like sending an envelope

protocal:host/

### protocal
* http (typical)
* https
* ftp
* file (opened local file)

### host
* local host 127

### resource path
* the thing you should be asking for is a NOUN

`npm i nodemon -g`
`nodemon server.js`

### REST
* GET: gets something off the shelf
* POST: put on the shelf (typically new thing)
* PUT: create or edit the thing
* PATCH: like a partial update
* DELETE: deletes

(CRUD)

query parameters

`npm i mocha chai chai-http -D`
