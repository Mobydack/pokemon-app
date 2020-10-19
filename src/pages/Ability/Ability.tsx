import * as React from 'react';
import { useParams } from 'react-router-dom';

const Ability = () => {
    const params = useParams();

    if (! params && params?.abilityName) {
        return null;
    }

    return <div>{abilityName}</div>;
};
