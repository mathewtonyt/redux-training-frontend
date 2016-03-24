import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Voting pair={["Trainspotting", "28 Days Later"]}
        hasVoted="Trainspotting" />,
    document.getElementById('app')
);