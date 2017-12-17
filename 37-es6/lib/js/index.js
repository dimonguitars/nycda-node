'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES5 does not support default arguments for functions
var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';

  return 'Hello ' + name;
};
console.log(sayHello()); // Hello World
console.log(sayHello('Mary')); // Hello Greg

var str = 'Blah';
// // Reassignment will give you an error
// str = 'Bee';
var animals = { cow: 'moo', cat: 'meow' };
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
for (var _i = 1; _i < 6; _i++) {
  console.log('Here is a template string ' + _i);
}
// // will throw error, i is not accessible from outside the loop
// console.log('this is from outside ' + i);

// Spread operator ...
var numbers = [5, 2, 5];
function add(a, b, c) {
  return a + b + c;
}
// instead of add(numbers[0], numbers[1]);
console.log(add.apply(undefined, numbers)); // 7
console.log(numbers);

var newMembers = ['Jane', 'Bob'];
var members = ['Tom', 'Ashley'].concat(newMembers);
console.log(members); // ['Tom', 'Ashley', 'Jane', 'Bob'];

// Use a plugin for this to work https://babeljs.io/docs/plugins/transform-object-rest-spread/
var my_obj = {
  one: 'one',
  two: 'two'
  // let another_obj = {...my_obj}
  // console.log(another_obj);

};var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

// var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

// var mergedObj = { ...obj1, ...obj2 };

var person = {
  name: 'Jane',
  attributes: ["5'5", 'female'],
  printDescription: function printDescription() {
    var self = this;
    this.attributes.forEach(function (attribute) {
      // Logs the global object if not in strict mode (Window in a browser)
      // Logs 'undefined' if in strict mode
      // Either way, 'this' is not person
      console.log(self.name); // undefined
      // this.name will be undefined
      console.log(self.name + ' is ' + attribute);
    });
  }
};
person.printDescription();

var my_func = function my_func(a, b) {
  return a + b;
};
console.log(my_func(3, 5));
// hi from IIFE
(function (a, b) {
  console.log(a + b);
})(6, 8);

// Enhanced Object Literals
// see this post for more info http://www.benmvp.com/learning-es6-enhanced-object-literals/
// short hand for assigning values
var test = function test(make, model) {
  return {
    make: make,
    model: model
  };
};
console.log(test('brand', 'number one'));

var new_person = {
  // _name, // wouldn't work for me have to comment out
  _name: '', // wouldn't work for me have to comment out
  setName: function setName(name) {
    this._name = name;
  },
  getName: function getName() {
    return this._name;
  }
};
console.log(new_person.setName('Antonina'));
console.log(new_person.getName());

// Class concept

var Controller = function () {
  function Controller() {
    var urlPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Controller);

    this._urlPrefix = urlPrefix;
  }

  _createClass(Controller, [{
    key: 'getUrlPrefix',
    value: function getUrlPrefix() {
      return this._urlPrefix;
    }
  }]);

  return Controller;
}();

var UsersController = function (_Controller) {
  _inherits(UsersController, _Controller);

  function UsersController() {
    var urlPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'users';

    _classCallCheck(this, UsersController);

    return _possibleConstructorReturn(this, (UsersController.__proto__ || Object.getPrototypeOf(UsersController)).call(this, urlPrefix)); // call parent constructor or urlPrefix won't be set!
  }

  return UsersController;
}(Controller);

var usersController = new UsersController();
console.log(usersController.getUrlPrefix()); // users


// Modules

// the import wouldn't work with these babel settings, will find a solution

var gigi = new _person2.default('1991', 'Gigi Moore', '172 cm');
console.log(gigi);