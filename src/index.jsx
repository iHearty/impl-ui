import React from 'react';
import {render} from 'react-dom';
import App from './app'; // Our custom react component


// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<App />, document.getElementById('app'));
