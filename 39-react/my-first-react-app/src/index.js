import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactCard from './ContactCard';
import registerServiceWorker from './registerServiceWorker';

  // Use to test the edge cases
  // <ContactCard name={1} mobileNumber={1} workNumber={1} email={1} />
  // <ContactCard workNumber="8953455766" />

ReactDOM.render(<div>
  <App />
  <ContactCard name="Antonina" mobileNumber="1234567890" workNumber="0987654321" email="a@a.com" />
  <ContactCard name="Gigi" mobileNumber="4563728762" workNumber="9048422321" email="gigi@gigi.com" />
  <ContactCard name="Sasha" mobileNumber="8432173553" workNumber="8953455766" email="sasha@sasha.com" />
  </div>, document.getElementById('root'));
registerServiceWorker();
