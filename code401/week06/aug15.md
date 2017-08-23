# Tue Aug 15

add to package.json when not testing `"test": "exit 0"`

esma stage 0, 1, 2 might not make it into next version, don't build off those. stage 4 is being worked on.

follow these ppl on twitter: sean larkin, axel rauschmayer, jason brown, rich harris, uncle bob martin, henrik joreteg, dan abramov, sebastian markbage

## React Basics

function app returns some JSX

ReactDOM.render(<App... call App()

`return <div><Greeting name="World" foo="FOO"/></div>`

don't try to return an object, needs to be a string or array of strings

need `key` on top level node

destructure props

props=object dict representation

pure functions have input, output and no state.

### classes

you can think of object props like a table

`__proto__`

`Object.getPrototypeOf(yourObj)`

prototypical inheritance is objects pointing at other objects

we used the `this` keyword so we can run same function in different contexts

`call` and `apply` actually calls the function
`bind` give you new function thats permanently bound to the this keyword you defined

`closure` use variables that are in functions ?

`.bind(this)`

arrow functions are context-less, do not need to `bind`

`super()` means call the parent class constructor

`fetch()`

need to prefix .env keys with `REACT_APP`

React is using process.env via webpack (not the real process)

omdbapi.com is a browser side api

