# Wed Jul 19

## Review
* async callback happens only once

```js
module.exports = function app(req, res) {
    let body = '';
    req.on('data', data => body += data);
    req.on('end', () => {
        // do something with the body
    })
}
```
or
```js
function bodyParser() {
    let body = '';
    req.on('data', data => body += data);
    req.on ('error', callback(err)); //req.on ('error', err => callback(err));
    req.on('end', () => {
        try {
            const obj = body ? JSON.parse(body) : null;
            callback(null, obj);
        } catch(err) {
            callback(err);
        }
    })
}
module.exports = function app(req, res) {
    bodyParser(req, (err, body) => {
        // do something with body
    });
};
```
* functional methods
* async callbacks
* event emitters

Key activities
* sequential
* parallel
* propagating errors

## Promises

### problem with callbacks
  * manual error checking
  * lots of nesting
  * can't guarantee they comeback in the right order

### incrementers
  * i++ return i first, then increment
  * ++i increment first, then give me i
  * i-- return i first, then decrement
  * --i decrement first, then return

### externalizing the call back
* change the syntax, rather than put in the aync func, wait for a promise

```js
someAsync(23, (err,  data) => {

});
// vs.
someAsync(23)
    .then(data => { ... });
```

* `.then` is meant for sequential work
* lookout for nested promises that don't have to be nested

Converting callbacks to promises
1. externalize the callback
  a. move it to not be a param of the main function
  b. make it a param of the .then
  c. get rid of the err

#### next week lecture@1:30
