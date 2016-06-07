import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ReactDOM from 'react-dom';

import TestComponent from 'components/test-component';

const Application = React.createClass({
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <TestComponent title="world" />
            </div>
        );
    }
});

ReactDOM.render(
    <Application />
, document.getElementById('application'));
