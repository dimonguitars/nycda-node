var fs = require('fs');
var file1 = parseMe('./people1.json');
var file2 = parseMe('./people2.json');
// parse a json file and write data to file
function parseMe(path){
  var promise = new Promise(function(resolve, reject){
    fs.readFile(path, function(err, data)
    {
     // check for possible errors
     if (err) {
       console.log(`an error occurred: ${err}`);
       reject(err);
     }
     // otherwise, parse json and return the data
     resolve(JSON.parse(data));
    })
  });
  return promise;
}

Promise.all([file1, file2]).then(values => {
  var text = values.toString();
  text = text.split(',');
  text = text.sort();
  fs.writeFile('peopleComplete.txt', text, 'utf8', function(err)
  {
   //check for possible errors
   if (err) {
   console.log(`there was a problem writing: ${err}`);
   throw err;
   }
   //otherwise, print a success message
   console.log('content written.');
  });
});
// // Freda's solution
// var fs = require('fs');
//
// fs.readFile('people1.json', 'utf-8', function(err, data1){
//      if (err) {
//          console.log(`an error occurred: ${err}`);
//     throw err;
//      }
// fs.readFile('people2.json', 'utf-8', function(err, data2){
//      if (err) {
//          console.log(`an error occurred: ${err}`);
//     throw err;
//      }
//
// var list1 = JSON.parse(data1);
//  var list2 = JSON.parse(data2);
//
// fs.writeFile('peopleComplete.txt', list1.concat(list2).sort());
//
// })
//
// })
