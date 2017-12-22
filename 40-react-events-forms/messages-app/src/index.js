import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MessageForm from './MessageForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <App />
    <MessageForm />
  </div>, document.getElementById('root'));
registerServiceWorker();
