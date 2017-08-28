# Mon Aug 28

## Review
use superagent or fetch

## Redux
Redux is not part of React, but often used with React

flow
actions -> reducers -> store -> view ---dispatch---> actions

principals
1. single source of truth
2. state is read-only
3. changes are made with pure functions

* must have reducer
* core of the redux store is reducers
* use optional payload (or amount) for the data about the action
* state of the store is only modified through actions

`const reducer = (state = [], { type, payload }) => { ... `
* state is the current state
* type is the action
* payload is the result of the action

```js
const index = state.findIndex(i => i._id === payload);
if (index < 0) return state;
return [
  ...state.slice(0, index),
  ...state.slice(index + 1)
];
```

* `.toEqual()` is the same as .deepEqual in jest
* can use a counter.constants.js
  * es6 modules with multiple named exports
    * `import * constants from './counter.constants'`
    * `import { INCREMENT, DECREMENT } from './counter.constants'`
