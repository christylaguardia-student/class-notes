# Wed Aug 23

## React review

don't need to keep the sub dir, just use `create-react-app .`

then `git remote add ...`

if no constructor, then the class will call the base class

you can use props prior to calling `super()`

components need to get data from parents

### Forms

source of truth?

uncontrolled forms

controlled forms

react-modal-dialog

### React Router

<https://reacttraining.com/react-router/>

`import { Router, other stuff... } from 'react-router-data`

```jsx
<Router>
    <div>
        <div>
            <h1>Welcome...</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/stores">Stores</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/stores" component={Stores} />
            <Redirect to="/" />
        </Switch>
    </div>
</Router>
```

conditionally render components based on the url bar

client side paths vs server paths

routes can be nested
