describe("Confirms sorting in ascending order: ", function() {
  it("Every next element sould be larger than the previous", function() {
    var Arr = require('../../index.js');
    var arr = new Arr([1,4,3]);
    expect(arr.sort()).confirmSortingAsc([1,3,4]);
  });
});

describe('The sum function: ', function () {
  it("Should return a sum of numbers", function() {
    var Arr = require('../../index.js');
    var arr = new Arr();
    // if(methodToTest(1,2,3) === 6) {
    //   console.log("test 1 passed");
    // }
    expect(arr.sum([1,2,3])).toEqual(6);
    // if(methodToTest(-1, 0, 1) === 0) {
    //   console.log("test 2 passed");
    // }
    expect(arr.sum([-1,0,1])).toEqual(0);
    // if(methodToTest(10, 20, 1) === 31) {
    //   console.log("test 3 passed");
    // }
    expect(arr.sum([10,20,1])).toEqual(31);
  });
});
