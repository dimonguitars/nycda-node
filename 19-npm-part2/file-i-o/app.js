//require the `fs` library
var fs = require('fs');
// Read from a file
//call `fs.readFile`
//`utf-8` is an encoding to ensure we get text
fs.readFile('./helloworld.txt', 'utf-8', function(err, data)
{
 //check for possible errors - more on this later
 if (err) {
   //log that an error happened
   console.log(`an error occurred: ${err}`);
   //throw the error for handling by the caller
   throw err;
 }
 //otherwise, print the contents of the file
 console.log(data);
});

// Write to a file
//make some content
var myContent = "hello world!\nHow are you today?";
//write that content to `helloworld.txt`
fs.writeFile('./write.txt', myContent, function(err)
{
 //check for possible errors
 if (err) {
 //log that an error happened
 console.log(`there was a problem writing: ${err}`);
 //throw the error for handling by the caller
 throw err;
 }
 //otherwise, print a success message
 console.log('content written.');
})

// Remove a file
//`unlink` removes the file
fs.unlink('./remove-me.txt', function(err){
 //check for possible errors
 if(err){
   //log that an error happened
   console.log(`an error occurred: ${err}`);
   //throw the error for handling by the caller
   throw err;
 }
});

// Try to write to a file that has data in it will overwrite the contents
//if `helloworld.txt` is set up to read-only (eg, `chmod 444 helloworld.txt`)
fs.writeFile('./helloworld.txt', 'overwriting hello world!', function(err){
 //will print an error object with the message
 //"Error: EACCES: permission denied, open './helloworld.txt'"
 console.log(err);
});

// Read files
fs.readdir('.', function(err, files){
 //`files` will now contain string file names in the current directory
 //note that the same existence and permissions rules from read and write apply,
 //meaning the directory must exist and you must have read permissions on it
 console.log(files);
});

console.log(__filename)
