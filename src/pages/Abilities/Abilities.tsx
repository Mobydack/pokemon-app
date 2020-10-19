import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Ability from 'pages/Ability';

const Abilities: React.FC = () => {
    const { url } = useRouteMatch();

    return (
        <>
            <h1>Abilities</h1>
            <Switch>
                <Route path={`${url}/:abilityName`}>
                    <Ability />
                </Route>
            </Switch>
        </>
    );
};

export default Abilities;
