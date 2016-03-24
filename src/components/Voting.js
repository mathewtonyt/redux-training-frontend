import React from 'react';
import Winner from './Winner'
import Vote from './Vote'
import PureRenderMixin from 'react-addons-pure-render-mixin'


export default React.createClass({
    mixins : [PureRenderMixin],
    getPair: function() {
        return this.props.pair || [];
    },
    isDisabled: function() {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function(entry) {
        return this.props.hasVoted === entry;
    },
    render: function() {
        console.log('the winner is => ' + this.props.winner);

        return <div className="voting">
            {
                this.props.winner ?
                    <Winner ref='winner' winner={this.props.winner}/> :
                    <Vote {...this.props} />
            }
        </div>;
    }
});