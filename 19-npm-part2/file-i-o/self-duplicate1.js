var fs = require('fs');

fs.readFile(__filename, 'utf-8', function(err, data){
  if(err) {
    console.log(`an error occurred: ${err}`);
    throw err;
  }

  fs.writeFile('./self-duplicate1.js', data, function(err){
    if (err) {
      console.log(`there was a problem writing: ${err}`);
      throw err;
    }
    console.log('cloned myself.');
  })
});
