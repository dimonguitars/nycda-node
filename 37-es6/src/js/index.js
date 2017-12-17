// ES5 does not support default arguments for functions
var sayHello = function(name = 'World') {
return 'Hello ' + name;
};
console.log(sayHello()); // Hello World
console.log(sayHello('Mary')); // Hello Greg

const str = 'Blah';
// // Reassignment will give you an error
// str = 'Bee';
const animals = {cow: 'moo', cat: 'meow'};
animals.cow = 'quack';
console.log(animals.cow); // quack

// The numbers 1 - 5 will be logged to the console
for (var i = 1; i < 6; i++) {
  var one = 'one';
 console.log(i);
 console.log(one);
}
// 6 will be logged to the console
// in a block scoped language, i would be undefined
console.log('this is from outside ' + i);
console.log('this is from outside ' + one);

// The numbers 1 - 5 will be logged to the console
for (let i = 1; i < 6; i++) {
 console.log(`Here is a template string ${i}`);
}
// // will throw error, i is not accessible from outside the loop
// console.log('this is from outside ' + i);

// Spread operator ...
let numbers = [5, 2, 5];
function add(a, b, c) {
 return a + b + c;
}
// instead of add(numbers[0], numbers[1]);
console.log(add(...numbers)); // 7
console.log(numbers);

let newMembers = ['Jane', 'Bob'];
let members = ['Tom', 'Ashley', ...newMembers];
console.log(members); // ['Tom', 'Ashley', 'Jane', 'Bob'];

// Use a plugin for this to work https://babeljs.io/docs/plugins/transform-object-rest-spread/
let my_obj = {
  one: 'one',
  two: 'two'
}
// let another_obj = {...my_obj}
// console.log(another_obj);

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

// var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

// var mergedObj = { ...obj1, ...obj2 };

var person = {
 name: 'Jane',
 attributes: ["5'5", 'female'],
 printDescription() {
   let self = this;
   this.attributes.forEach(attribute => {
     // Logs the global object if not in strict mode (Window in a browser)
     // Logs 'undefined' if in strict mode
     // Either way, 'this' is not person
     console.log(self.name); // undefined
     // this.name will be undefined
     console.log(self.name + ' is ' + attribute);
   });
 }
}
person.printDescription();

var my_func = (a, b) => {
  return a + b;
}
console.log(my_func(3, 5));
// hi from IIFE
((a, b) => {
  console.log(a + b);
})(6, 8);

// Enhanced Object Literals
// see this post for more info http://www.benmvp.com/learning-es6-enhanced-object-literals/
// short hand for assigning values
let test = (make, model)=>{
  return{
    make,
    model
  }
}
console.log(test('brand','number one'));

let new_person = {
 // _name, // wouldn't work for me have to comment out
 _name: '', // wouldn't work for me have to comment out
 setName(name) {
   this._name = name;
 },
 getName() {
   return this._name;
 }
}
console.log(new_person.setName('Antonina'));
console.log(new_person.getName());

// Class concept
class Controller {
 constructor(urlPrefix = '') {
   this._urlPrefix = urlPrefix;
 }
 getUrlPrefix() {
   return this._urlPrefix;
 }
}

class UsersController extends Controller {
 constructor(urlPrefix = 'users') {
   super(urlPrefix); // call parent constructor or urlPrefix won't be set!
 }
}
let usersController = new UsersController;
console.log(usersController.getUrlPrefix()); // users



// Modules

// the import wouldn't work with these babel settings, will find a solution
import Person from './person';
let gigi = new Person('1991', 'Gigi Moore', '172 cm');
console.log(gigi);
