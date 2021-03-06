import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import CognitiveBias from "./CognitiveBias";

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/"><CognitiveBias/></Route>
            </Switch>
        </div>
    </Router>
);

export default hot(module)(App);
