# Thu Jul 13

const pixels = buffer.slice(pixelOffset);

buffer.slice([start[,end]])

each pixel 24 bits each, 3 bytes
in order blue, green, red

looping construct, +3 to the offset
b=i, g=i+1, r=i+2

8 bits = 1 bytes
```
const length = 100; //example number
for (let i = 0; i < pixels.length; i = i + 3) {
    // console.log(i);
    console.log({
        b: pixels.readInt8(i), // 8 bit integer
        g: i + 1,
        r: i + 2
    });
}
```
little endian or big endian

dont need to convert number to hex

---

Classes - help group stuff together, and hold on to state

```
// old way
function Person() {
    this.name = name;
}

Person.prototype.introduce = function() {
    return `I am ${this.name}`;
};

// new way
class Class {
    constructor() {
        // stuff in traditional constructor function

        // "initialization"
        this.name = name;

    }

    introduce() {
        return return `I am ${this.name}`;
    }
}
```

```
class BitmapTransformer {
    constructor(buffer) {
        if(!buffer) throw new YouForgotTheBufferError();
        // ...
    }

    transform(transformation) {
        // ...
    }

    writeFile(filename) {
        // use fs to write the file ...
    }
}

// helper method
BitmapTransformer.readFile = function(fileName) {
    const buffer = fs.readFile(fileName);
    return new BitmapTransformer(buffer);
}

// const bitmap = BitmapTransformer.readFile(fileName);
module.exports = BitmapTransformer;
```
---

Architecture, Async

TCP - send stuff from browser to web server

HTTP - uses TCP, like an envelope (head, status, ), the letter is the data

threads

queue - line of fu waiting to get in the event loop

```
console.log('starting...');
setTimeout(() => { // declaring function, but not running
    console.log('timeout done');
}, 5000); // wait 5 sec then run the function
```

web server - keeps adding function to the queue

`http.createServer((r, response) => response.end('hello world')).listen(3001);`

```
fs.readFile('timeout.js', () => {
    console.log('file read done');
});
```

`console.log('at the end of the file');`

can set a variable as readFile, then console.log the variable
need to use callback

```
function readFile(filename) {
    fs.readFile('timeout.js', 'utf8', (err, data) => {
        if(err) console.log('ERROR', err);
        else console.log(data.slice(20));

        console.log('file', filename, 'preview:', data,slice(20))
    });
}
```

---

`__dirname `
sounds like "dunder derrr name"
it is node's global object to get the file name of the current file

if you forget the done, you can get false positive tests, becuz Async

```
const fs = reqiure('fs');
describe('copy directory', done => {
    it(
        // ...
    )

} )
```

copy all the files in a directory

```
rm -rf

npm i rimraf -D

fs.readDir
fs.readFile
fs.writeFile

npm i mkdirp -S
```


```
const fs = require('fs');
const mkdirp = require('mkdirp');

function copyDir(fromDir, toDir, callback) {
    // read teh files from the souce dir
    fs.readdir(from, (err, files) => {
        if(err) return callback(err);

        // make sure the toDir exists
        mkdirp(toDir, err => {
            if(err) return callback(err);
            let count = files.length;

            // loop through each file name
            files.forEach(file => {
                // make full source and destination paths
                const filepath = path.join(fromDir, toDir);
                const destfile = path.join(toDir, file);

                // read this file
                fs.readFile(file, (err, contents) => {
                    if(err) return callback(err);

                    // write this file
                    fs.writeFile(destFile, contents, err => {
                        if(err) return callback(err);
                        // take one down, pass it around
                        count--;
                        // check if done
                        if(count === 0) callback(null);
                    });
                });
            });
        });
    });
}
```

---

## LAB

create the db in the before
