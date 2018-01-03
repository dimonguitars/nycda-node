import React, { Component } from 'react'
import ContactCard from './ContactCard';

const Contacts = function(props) {
 // const person = {
 //   fName: 'Tom',
 //   lName: 'Smith',
 //   age: '12',
 //   zipCode: '11231',
 //   state: 'CA'
 // }
 return <ContactCard {...props} />
};

export default Contacts;
