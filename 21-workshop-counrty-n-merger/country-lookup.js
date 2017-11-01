// Check if the country name is passed
if(process.argv[2]){
  var fs = require('fs');
  // store the country name
  var countryName = process.argv[2];
  // open the json file
  fs.readFile('./countries.json', function(err, data)
  {
   // check for possible errors
   if (err) {
     // log that an error happened
     console.log(`an error occurred: ${err}`);
     // throw the error for handling by the caller
     throw err;
   }
   // otherwise, parse json and store the parsed data
   var countriesInfo = JSON.parse(data);
   // decided to use simple loop and return from it when we find the value
   for (var i = 0; i < countriesInfo.length; i++){
     // check if the current object's name property is what we are searching for
     if (countriesInfo[i].name.toLowerCase() === countryName.toLowerCase()){
       // output each of the keys and values
       for (var key in countriesInfo[i]){
         console.log(`${key}: ${countriesInfo[i][key]}`);
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
