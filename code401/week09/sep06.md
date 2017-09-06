
# Wed Sep 6

# User Auth in a React App
* feature auth vs asset auth
  * feature could have a lot of dir hierarchy, e.g. '../../../../myfile'
  * asset could be hopping around a lot, also decoupled code

Route | Action(s) | State(s)
--|--|--
verify | AUTH_FAILED, FETCH_USER | user, error 
signin | GOT_TOKEN, FETCH_USER | token
signup | | 
signout| LOGOUT | user

FOUUC: flash on unstyled content

`...rest` is not the spread parameter, means take the rest of the properties and put on the object (currently stage 3 es6)

```js
const obj = { foo: 'FOO', bar: 'BAR', quix: 'QUIX'};

let { foo, ...props } = obj;
// will return two objects
// foo: 'FOO';
// props: { bar: 'BAR', quix: 'QUIX'};
```

oauth: sign in with fb, twitter, google, etc.

Auth overview:
* server must be set up
* manage data in store
  * track the token
  * user, (make sure not returning hash)
  * error
* presentation components, need access to store actions
* routes - redirect to signin when not signed in, and take to you to where you were going after signin
* hook up to http service

app and server only talk through http (the api), they do not have access to eachother any other way

*authentication* = are you who you say you are? if yes, you get a token (like a wristband)
