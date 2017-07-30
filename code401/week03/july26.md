# Wed Jul 26

## Middleware

* flow between handlers
* sometimes all the additional handlers that don't give a response
* `app.use...` web requests come in with req, res. express will try to find the handler, like control flow through the middleware
* can use middleware to protect routes, like no token, no route

`const jsonParser = bodyParser.json()`
put in `app.post('/unicorns', jsonParser, (req, res)...`

`npm i morgan`

pass multiple handlers `app.use(f1, f2, f3...`

Middleware TTD


---

`Object.Keys(yourObjectName)` returns array of property names

`Object.Values(yourObjectName)` returns array of all values