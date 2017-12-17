"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "consructor",
    value: function consructor(yob, name, height) {
      this.name = name;
      this.yob = yob;
      this.height = height;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getYob",
    value: function getYob() {
      return this.yob;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "setName",
    value: function setName(n) {
      this.name = n;
    }
  }, {
    key: "setYob",
    value: function setYob(y) {
      this.yob = y;
    }
  }, {
    key: "setHeight",
    value: function setHeight(h) {
      this.height = h;
    }
  }, {
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.yob;
    }
  }]);

  return Person;
}();

exports.default = Person;