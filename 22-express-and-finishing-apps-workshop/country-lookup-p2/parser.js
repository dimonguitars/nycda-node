function parseFile(path){
  var fs = require('fs');
  return new Promise(function(res, rej){
    // open the json file
    fs.readFile('./' + path, function(err, data)
    {
     // check for possible errors
     if (err) {
       // log that an error happened
       console.log(`an error occurred: ${err}`);
       // throw the error for handling by the caller
       rej(err);
     }
     // otherwise, parse json and resolve with the parsed data
     res(JSON.parse(data));
    });
  });
}

module.exports = {
  parseFile: parseFile
}
