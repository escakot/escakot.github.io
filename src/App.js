import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ColorRandomizer from './components/iOSColorRandomizer'
import Contact from './components/Contact'

const App = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ios-color-randomizer" component={ColorRandomizer} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    </BrowserRouter>
);

export default App;
