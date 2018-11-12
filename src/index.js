import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppNavBar from './components/AppNavBar';
import Master from './components/client/master';
import MasterAdmin from './components/admin/master';
import QuickView from './components/client/quickView';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Master />, document.getElementById('main-wrapper'));
ReactDOM.render(<QuickView />, document.getElementById('quick-view'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
