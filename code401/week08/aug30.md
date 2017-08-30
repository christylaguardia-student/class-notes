# Wed Aug 30

## React & Redux Review
* state is always an object
* reducers
  * functions take state and action and return state
  * can have multiple, but more complicated
* try `<NavLink...`
* `create-react-app` uses express (port 3000)
  * has `proxy` feature
* when app server diff from data/backend server, run into CORS issues
  * the browser will check with the backend server before responding to browser
  * will need code for CORS
* `nginx` sounds like 'engine X', super fast
* heroku uses server farm, with some layer (like nginx) to route/direct them to whatever server you have

## SCSS
* Sass: Syntactically Awesome Style Sheets, not used as much anymore
* SCSS <http://sass-lang.com/guide>
* pug (fka Jade) html meta lang
* stylus css

In a react app, webpack lets you import a css file (css loader, style loader dynamically injects from the JS into the DOM)

create-react-app package.json has an eject script

To use *SCSS* in `create-react-app`:
* add a CSS preprocessor
* don't use the same class names for multiple components

1. `npm install --save node-sass-chokidar`
2. add scripts to package.json
3. rename `App.css` to `App.scss`
4. `npm run node-scss-chokidar`

* you can nest CSS
* use `&` to attach
* use `$` for variables
* can import CSS files into other CSS files
  * import variables, like colors
  * prefix file name with `_`
  * `@import './styles/colors.scss'`
  * using es6 import, with webpack loading the css
* you can also have calculations

## Next lab (due Tue 5th)

_From now on create full-stack react/reduct apps from scratch_
work backwards, user -> ui -> components...
* what are the main areas of the app? (draw it)
* what components will you need?
  * create component, then write a enzyme snapshot tests (static)
  * next parametarize the test (props)
  * test actions
  * test reducers, did state change?
* use two repos
