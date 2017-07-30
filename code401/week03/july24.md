# Mon Jul 24

## Forgot to fork?

1. git init
2. add remote `git remote add origin <your-gh-url>`
3. commit to master
4. `git push -u origin`, may need to force `git push -u -f origin`
5. submit issue w/ link

## ExpressJS

### setup

npm i
npm init
npm i express -S
npm i eslint mocha chai chai-http -D

create gitignore file for:
```
.DS_Store
node_modules
.env
.vs*
npm-debug.log
```

1. start with app.js
2. then create server.js

```js
const express = require('express');
const app = express;
//or this does the same thing in one line:
const app = require('express')();
```

```
npm i mongodb
npm i body-parser -S
```
