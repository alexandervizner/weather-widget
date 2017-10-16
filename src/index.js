import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
