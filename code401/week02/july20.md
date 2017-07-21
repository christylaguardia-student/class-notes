# Thu Jul 20

`mongod --config /Users/christinelaguardia/mongodb/bin/mongodb.config.txt
`

## Distributed Systems
classic three tier: database -> server -> clients

tcp connectivity, for web apps typically http

us mongo cli, robo3t and node.js to talk to db

RDBMS vs NoSQL - schema vs schema-less

NoSQL - more modern approach, no step to say create this, it'll just create it. garbage in, garbage out.

`/` root of hardrive

`~` home for user

### mongo setup

`which mongo`

bash_profile vs bashrc

edit your profile, then need a new terminal window
`code .bash_profile`

`PATH=$PATH: ~/mongodb/bin`

`mongod --dbpath ~/mongodb/data`

### using mongo

1. get mongo running 'gomongo'
2. in another terminal window
```
mongo
show dbs
use meow
db.cats.insert({ name: 'felix', type: 'tuxedo' })
db.cats.find()
db.cats.find().pretty()
```
or run commands in Robo 3T
```
db.cats.insert({ name: 'garfield', type: 'orange tabby' })
db.cats.findOne()
db.cats.find({ type: 'orange tabby' })

```

insert
* like adding rows to table
* actually adding documents to collection
* automatically adds ObjectId id, but you can assign one manually

find
* like using query
* uses objects and named value pairs
* findOne() returns array
* find() returns object

update
* default is REPLACES document

$pull
$push

mongodb node driver

### Lab
due Monday@1
