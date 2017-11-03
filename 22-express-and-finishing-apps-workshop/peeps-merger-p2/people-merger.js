var fs = require('fs');
var p = new Promise(function(res){
  fs.readdir('./people-dir', (err, files) => {
    var arr = [];
    files.forEach(function(file){
      var f = parseMe('./people-dir/' + file);
      arr.push(f);
    });
    res(arr);
  });
});
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

Promise.all([p]).then(function(values){
  Promise.all(values[0]).then(values => {
    var text = values.toString();
    text = text.split(',');
    text = text.sort();
    text = JSON.stringify(text);
    fs.writeFile('./peopleComplete.json', text, 'utf8', function(err)
    {
     //check for possible errors
     if (err) {
     console.log(`there was a problem writing: ${err}`);
     throw err;
     }
     //otherwise, print a success message
     console.log('content written.');
    });
  })
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
