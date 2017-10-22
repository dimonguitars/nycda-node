// // Synchronous behaviour
// function pause(m){
//   var timestampStartExecution = new Date();
//   while((new Date()) - timestampStartExecution <= m){
//     // console.log((new Date()) - timestampStartExecution)
//   }
// }
// console.log('First');
// // pause here is a sunc function
// pause(1000);
// console.log('Third');

// // Asynchronous behaviour
// console.log('First');
// // settimeout is an async function
// setTimeout(function(){
//   console.log('Second');
// }, 1000);
// console.log('Third');

// // Countdown Timer
// // function countdown(start){
// //   for (start; start >= 0; start =- 1000){
// //     // wouldn't work because of the async behaviour of the settimeout
// //     setTimeout(function(){
// //       console.log(start);
// //     }, 1000);
// //   }
// // }
//
// function counter(start) {
//   // display the initial value
//   console.log(start);
//   // setting an interval function to display the current start number every second
//   setInterval(function(){
//       if (start <= 0){
//         // stop the interval function
//         clearInterval(this);
//       }
//       else {
//         start = start - 1000;
//         console.log(start);
//       }
//   }, 1000);
// }
//
// counter(5000);

// Decending string
// if input is 5:
// *****
// ****
// ***
// **
// *
function decendingString(start) {
  // display initial value of asterisks using Array's join method (note you need a plus one here)
  // console.log(Array(start + 1).join('*'));
  console.log('*'.repeat(start));
  // setting an interval function to display the current start number every second
  setInterval(function(){
    // stop at 1 cause we don't need a 0
    if (start <=  1){
      // stop the interval function
      clearInterval(this);
    }
    else {
      start--;
      // console.log(Array(start + 1).join('*'));
      console.log('*'.repeat(start));
    }
  }, 1000);
}

// // with passed arguments through the command line interface
// var ans = process.argv[2];
// if (isNaN(ans)){
//   // handle error by exiting the script execution
//   process.exit()
// }
// else{
//   decendingString(Math.round(ans));
// }

// // by asking user to input data on terminal: native way
// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
//
// process.stdin.on('data', function (text) {
//  console.log('received data:', util.inspect(text));
//  if (text === 'quit\r\n') {
//    done();
//  }
// });
//
// function done() {
//  console.log('Now that process.stdin is paused, there is nothing more to do.');
//  process.exit();
// }

// // ask user using prompt npm module,
// // run 'npm install prompt' first to install the prompt module
// var prompt = require('prompt');
// var ans;
// var properties = [
//   {
//     name: 'Number Of Asterisks',
//     description: 'Input number of asterisks: ',
//     validator: /^[0-9\s\-]+$/,
//     warning: 'Username must be only numbers'
//   }
// ];
//
// prompt.start();
//
// prompt.get(properties, function (err, result) {
//   if (err) { return onErr(err); }
//   decendingString(result['Number Of Asterisks']);
// });
//
// function onErr(err) {
//   console.log(err);
//   return 1;
// }
