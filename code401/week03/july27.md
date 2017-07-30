# Thu Jul 27

## mongoose schema

relationships:
* store-pet 1:many
* pet-toys many:many

```js
//pet schema
name: {
    ...
},
store: { //this is obj because 1:many relationship, FK
    type: Schema.Types.ObjectId,
    ref: 'Store', //this needs to match the export fo the relatd store
    ...
},
toys: [{ //this is an array be cause many:many relationship, like a PK2PK table
    type: Schema.Types.ObjectId,
    ref: 'Toy'
}]
```

can break up mongoose schema in another module (sub-doc)

`app.use('/api/pets)` use api for data api to keep separate

in get route, use `populate` for FK

`Promise.all` returns array of results in order called

use `.populate` to get parent for a child
use `.find` to get children for a parent

can put functions in schema like
`schema.statics.getDetail = function(id) { ... }`


zip code api, server acts like a client to use

`npm i superagent -S`

`npm i dotenv -S`
`require('dotenv').config()`
