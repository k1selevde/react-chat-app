import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom"

import {Auth, Home} from './pages'
let isAuth = true

function App() {
  return (
    <div className="container">
        <Switch>
            <Route
                exact
                path={["/signin", "/signup", "/signup/verify"]}
                component={Auth}
            />

            <Route
                path="/"
                render={() => (isAuth ? <Home /> : <Redirect to="signin" />)}
            />
        </Switch>
    </div>
  );
}

export default App;

