# Mon Aug 14

## React

Background
* today we don't have to worry if JS in all browsers
* everything node
* previously we used
  * jquery to manipulate the dom
  * handlebars for templating
* now think about how the relationships between the html and data
  * and the syncing to the dom happens _'automagically'_
* ECMA releases 2009, 2015, 2016, 2017
* modern front end development is more complex (than 3-5 yrs ago)

Install react
`npm i -g create-react-app`
`create-react-app <name of your project>`
`npm start`

http://babeljs.io/repl

Key concept: *data down, events up*
* whenever we change state, render() is called
* it renders a virtual DOM