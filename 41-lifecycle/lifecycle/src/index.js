import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import MyComponent from './MyComponent'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<div>
//     <App />
//     <Form />
//   </div>, document.getElementById('root'));

ReactDOM.render(<div>
    <MyComponent />
    <MyComponent name="Gigi" />
    <MyComponent name="Brian" myProp1="Brian's prop" />
  </div>, document.getElementById('root'));

registerServiceWorker();
