import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
  {routes}
</div>, document.getElementById('root'));
registerServiceWorker();
