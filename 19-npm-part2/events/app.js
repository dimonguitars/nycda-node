// var EventEmitter = require('events');
// var myEmitter = new EventEmitter();
// myEmitter.on('my-event', function(message) {
//  console.log(message);
// });
// myEmitter.emit('my-event', 'hello world!');

// var telephone = new EventEmitter();
// var rings = 0;
// //let the listener function be declared as a variable
// var listener = function() {
//  console.log(rings);
//  //increment the number of rings
//  rings++;
//  //on the second ring, we pick up
//  if(rings == 2){
//    //and remove the listener
//    telephone.removeListener('phone-ring', listener);
//  }
// };
// myEmitter.on('phone-ring', listener);
// myEmitter.emit('phone-ring', rings);
// myEmitter.emit('phone-ring', rings);
// myEmitter.emit('phone-ring', rings);
// myEmitter.emit('phone-ring', rings);
// myEmitter.emit('phone-ring', rings);

// //declare a Cat type
// function Cat() {
//  //keep a reference to `this` for use in other scopes
//  var self = this;
//  //declare a method to speak that emits a message
//  self.speak = function(){
//    self.emit('speak', 'Meow!:3');
//  };
// }
// //inherit from `EventEmitter`, this will make `Cat` an event emitter
// Cat.prototype = new EventEmitter();
// //create an instance of Cat
// var myCat = new Cat();
// //listen to the cat speak
// myCat.on('speak', function(message){
//  console.log(message);
// });
// //some time later, have the cat speak
// //will trip the `speak` listener and print "meow"
// myCat.speak();

// // Greeting Excercise
// var EventEmitter = require('events');
// var doorbell = new EventEmitter();
// var greeter = function(obj){
//   if(obj.age < 18){
//     console.log(`Hello ${obj.name}! You are getting a proper greeting because you are ${obj.age} and witty greetings are for adults, not you :P`);
//   }
//   else{
//     console.log(`Hello ${obj.name}! You are getting a witty greeting because you are ${obj.age}. It's not that witty as you thought it would be..`);
//   }
//
// }
// doorbell.on('ring', greeter);
// // doorbell.emit('ring', {name:'Mary', age: 12});
// doorbell.emit('ring', {name:'John', age: 32});
