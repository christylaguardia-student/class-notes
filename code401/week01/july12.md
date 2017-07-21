# Wed Jul 12

## debugging tools
select mocha, change test to tests

npm run scriptname

## Binary Data
* big vs little endiness
* tells you which direction to read the file

## Buffer

```js
const fs = require('fs');
fs.writeFileSync('obj.json', JSON.stringify(obj));
const obj = { name: 'pdx' };
const buffer = fs.readFileSync('./obj.json');
console.log(buffer[2]);
```
