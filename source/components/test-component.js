import React, { PropTypes } from 'react';

const TestComponent = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired
    },

    render() {
        return (
            <p>{this.props.title}</p>
        );
    }
});

export default TestComponent;
