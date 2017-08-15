# Mon Jul 31

## ripe-banana

you can use `populate` for film - studio, but not studio - film

```js
Promise.all([
    Film.findById(filmId).populate(...),
    Review.find({ film: flimid })
])
    .then(([film, reviews]) => film.reviews = reviews)
```

## Model-Route Review

(see the cheat sheets)

## Authentication & Authorization

* authentication: are you who you say you are?
 * username & password match
 * or token given to them
* authorization: are you allowed to do that?
 * like you've already got in, we know who you are but need to check if you're allowed

JWT: json web token
1. header
2. payload (jwt claims set)
3. signature

* can not be tampered with

hash - server uses it to compare using algorithms to determine the password, you don't see it

```js
schema.method('generateHash', function(password){
    this.has = bcrypt.hashSync(password, 8);
});
```

you can set expiration date on token

two biggest mistakes:
1. returning sensitive info (hashes...)
2. don't trust client input (like /favories/userid)

be conscience on what you're returning

node servers are stateless

nodejs has single event loop

if quad core processor, can run 4 node threads (has c# wrapper)

has advantage over single threaded servers

try out the mongo aggregation pipelines assignment if have time

data pyramid
    /\
   /wisdom
  /knowledge
 /information
/data
