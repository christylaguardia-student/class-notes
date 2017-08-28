# Thu Aug 24

## Review

* balance effort & maintainability and what test will add value
* can create snapshot tests to make sure component doesn't change unexpectedly
* look at snapshots and see if it makes sense (its not code)

### npm packages

react

`npm i create-react-app`

`create-react-app thenameofyourapp`

testing

` npm i react-test-renderer
enzyme
enzyme-to-json
jest@20.1.0-alpha.3
-D`

router

`npm i react-router-dom -S`

## Full Stack

* create separate repos for travis
  * real world will probably be separate for testing, versioning, releasing
* proxy requests

in your terminal:

1. run server
2. run mongodb
3. run app

`create-react-app` comes with a build script `npm run build`

in package.json
```
"copy": "rm -rf ../server/public && cp -R ../build ../server"
```

conway's law

server url vs. client url

react router only looks at url bar, not ajax calls

react uses webpack, includes superagent

container components

have separate front-end components for display and components for data orchestration (add, delete...)

controlled form - source of truth is the component state not the form controls

`e.preventDefault()` keeps the from from trying to re-post the page

keep form from clearing when error by returning promise in handleAdd

lab bonus: when you do the sever, make it so the images belong to an album

* router due tomorrow
* full-stack due monday
