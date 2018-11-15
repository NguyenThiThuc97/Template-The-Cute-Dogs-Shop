import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppNavBar from './components/AppNavBar';
import MasterAdmin from './components/admin/master';
import MasterClient from './components/client/master';
import QuickView from './components/client/quickView';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<MasterAdmin />, document.getElementById('content'));
ReactDOM.render(<MasterClient />, document.getElementById('content'));
// ReactDOM.render(<QuickView />, document.getElementById('quick-view'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
