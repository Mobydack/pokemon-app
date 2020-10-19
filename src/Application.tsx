import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Abilities from './pages/Abilities';

const Application: React.FC = () => (
    <Router>
        <Switch>
            <Route path='/'>
                <Index />
            </Route>
            <Route path='/ability'>
                <Abilities />
            </Route>
        </Switch>
    </Router>
);

export default Application;
