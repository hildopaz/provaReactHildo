import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Cards from './pages/Cards'
import Forms from './pages/Forms'
import Pricing from './pages/Pricing'
import Blocks from './pages/Blocks'

export const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} />
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}