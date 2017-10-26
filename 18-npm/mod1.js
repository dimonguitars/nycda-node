// exports.foo = 'bar';
// exports.foo2 = 'two';
// module.exports.say = sayHello;
// module.exports.funcs = {
//   fun1: sayHello2,
//   fun2: sayHello3
// }
//
// function sayHello(){
//   console.log('Hola!');
// }
// function sayHello2(){
//   console.log('Hello Hello!');
// }
// function sayHello3(){
//   console.log('Privet!');
// }

//this is in my-module.js
var extraInformation;
function helloWorld(){
 return "Hello world!";
};
function helloPerson(name){
 return `Hello ${name}. ${extraInformation}`;
 // return 'Hello '+ name + '. ' + extraInformation;
};
module.exports = function(info){
 extraInformation = info;
 return {
   helloWorld: helloWorld,
   helloPerson: helloPerson
 };
};
