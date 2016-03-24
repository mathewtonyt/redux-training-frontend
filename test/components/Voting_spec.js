import React from 'react';
import ReactDOM from 'react-dom';
import {List} from 'immutable'

let mlog = require('mocha-logger')

import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

describe('Voting', () => {


    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;

        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]}
                vote={vote}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(votedWith).to.equal('Trainspotting');
    })

    it('disables the buttons when the user has voted', () => {

        const component = renderIntoDocument(
            <Voting pair={['Trainspotting', '28 Days Later']}
                hasVoted='Trainspotting' />
        )

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
        //   mlog.log('the buttons => ' + buttons.toString())
        expect(buttons[0].hasAttribute('disabled')).to.equal(true)
        expect(buttons[0].textContent).to.contain('Vote')
        expect(buttons[1].hasAttribute('disabled')).to.equal(true)
    })

    it('renders just the winner when there is one', () => {
        const component = renderIntoDocument(
            <Voting winner="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = ReactDOM.findDOMNode(component.refs.winner);
        mlog.log('winner', winner)
        mlog.log('the value is' + winner.textContent)
        expect(winner).to.be.ok;
        expect(winner.textContent).to.contain('Trainspotting');

    })

    it('renders as a pure component', () => {
        const pair = ['Trainspotting', '28 Days Later'];
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');

        pair[0] = 'Sunshine';
        component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );
        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');
    })

    it.only('does update DOM when prop changes', () => {
        const pair = List.of('Trainspotting', '28 Days Later');
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');

        const newPair = pair.set(0, 'Sunshine');
        component = ReactDOM.render(
            <Voting pair={newPair} />,
            container
        );
        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Sunshine');
    });

});