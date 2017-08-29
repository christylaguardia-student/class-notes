# Tue Aug 29

* 1:1 tomorrow
* back-end quiz redo due Sept 8th

## Review
* kabob-case file names
* TitleCase for JS constructor functions or classes _(don't TitleCase anything else)_
### React
* two kinds of react components
  * `class MyClassComponent extends Component {...`
    * has a `render()`
    * has access to props
  * `function MyFunctionComponent() {...`
    * has a `return()`
    * props are passed into
* no white space on interpolator `<div>{foo}</div>`
* white space on javascript `const { foo } = this.props`
* don't need to create state for things that are easy to derive or calculate
* separate presentation from container
  * container components usually just need props
  * make presentation component: take what you're rendering, and move it to a pure function
* don't really need redux in a simple react app
* when using redux, don't use `setState`
* think about:
  * what state do you have?
  * what do you need to change?
* DOM events vs component events
  * same as `document.addEventListener`
```html
<input id="theInput" />
```
```js
document.getElementById('theInput').addEventListener('keypress', event => {
  console.log(event.which);
})
```
* if you are setting state that is dependent on the prior state, `setState` is going to work asynchronously
```js
this.setState((prevState, props) => {
  return { counter: prevState + val }
});
```
