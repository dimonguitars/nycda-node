beforeEach(function () {
  jasmine.addMatchers({
    confirmSortingAsc: function(){
      return {
        compare: function(actual, expected){
          for(var i = 0; i < actual.length; i++){
            if(expected[i] > actual[i]){
              return{
                pass: false
              }
            }
          }
          return{
            pass: true
          }
        }
      }
    }
  });
});
