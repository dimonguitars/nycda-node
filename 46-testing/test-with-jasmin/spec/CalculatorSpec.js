describe("Create calculator", function() {
 var Calculator = require('../lib/Calculator.js');
 var calc = new Calculator;
 it("should add two numbers", function() {
   expect(calc.add(3,5)).toEqual(8);
 });
 it("should subtract two numbers", function() {
   expect(calc.subtract(3,5)).toEqual(-2);
 });
 it("should see if numbers are equal", function() {
   expect(calc.equal(3,5)).testMatcher(false);
 });
});
