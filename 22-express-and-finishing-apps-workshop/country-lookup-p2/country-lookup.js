// Check if the country name is passed
if(process.argv[2]){
  var parser = require('./parser.js');
  // store the country name
  var countryName = process.argv[2];
  var countriesInfo = parser.parseFile('countries.json');
  countriesInfo.then(function(data){
    // decided to use simple loop and return from it when we find the value
    for (var i = 0; i < data.length; i++){
      // check if the current object's name property is what we are searching for
      if (data[i].name.toLowerCase() === countryName.toLowerCase()){
        // output each of the keys and values
        for (var key in data[i]){
          console.log(`${key}: ${data[i][key]}`);
        }
        // break out of the loop when we find the value
        return;
      }
    }
  });
}
else{
  console.log('Please pass a name of a country to the script.');
}
