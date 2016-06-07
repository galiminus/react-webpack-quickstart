import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ReactDOM from 'react-dom';

import TestCompoment from 'components/test-component';

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
    <Provider store={store}>
        <Application />
    </Provider>
, document.getElementById('application'));
