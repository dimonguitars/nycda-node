import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import Parent from './Parent';
import Child from './Child';
import Title from './Title';
import Parental from './Parental';
import ParentalChild from './ParentalChild';
import Contacts from './Contacts';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<div>
//     <App />
//     <Form />
//   </div>, document.getElementById('root'));

// ReactDOM.render(<Parent>
//  <Child childName="Everette" hasAccess={false} message="Super duper Message" />
//  <Child childName="Sally" hasAccess={true} message="Hi Sally How Are you" />
//  </Parent>, document.getElementById('root'))

// ReactDOM.render(<div>
//     <Title name="My Name" />
//   </div>, document.getElementById('root'));

// ReactDOM.render(<Parental>
//       <ParentalChild value="one" />
//       <ParentalChild value="two" />
//       <ParentalChild />
//     </Parental>, document.getElementById('root'));

ReactDOM.render(<div>
  <Contacts fName="Antonina" lName="Howard" age="18" zipCode="10000" state="NY" />
  <Contacts fName="Gigi" lName="Moore" age="38" zipCode="10034" state="NY" />
  </div>, document.getElementById('root'));

registerServiceWorker();
