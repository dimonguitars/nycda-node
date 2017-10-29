// function hello(name, callback) {
//  //if the name is not provided,
//  if (!name) {
//    //call back with an Error
//    return callback(new Error('no name provided!'));
//  }
//  //otherwise, saying goodbye takes a moment
//  setTimeout(function(){
//    //call back with a friendly goodbye
//    callback(null, `Farewell, ${name}!`)
//  }, 3000);
// };
//
// //define `goodbye` as a callback
// function goodbye(err, message) {
//  //if there was a problem,
//  if (err) {
//    //handle the error
//    //in this case, print the problem
//    console.log(`Problem: ${err}`);
//    return;
//  }
//  //otherwise, log the message
//  console.log(message);
// };
// //prints "farewell, Sally!" after ~500ms
// hello('Sally', goodbye);
// //prints "Problem: no name provided!"
// hello(null, goodbye);


// // Drink refill
// // drink refill function
// function drinkRefill(type, ice, callback){
//   if(!type){
//     return callback(new Error('Drink type needs to be specified.'));
//   }
//   if(type.toLowerCase() === 'lemonade' && !ice){
//     return callback(new Error('Lemonade requires ice.'));
//   }
//   setTimeout(function(){
//     var iceMessage = '';
//     if(ice){
//       iceMessage = ' with plenty of ice';
//     }
//     else{
//       iceMessage = ' without any ice';
//     }
//     callback(null, `Here is your ${type}${iceMessage}, nice and full.`)
//   }, 2000);
// }
// // callback definition
// function refill(err, message){
//   if(err){
//     console.log(`Something gone wrong: ${err}`);
//     return;
//   }
//   console.log(message);
// }
// // test cases
// drinkRefill('Hot Tea', false, refill);
// drinkRefill('Iced Tea', true, refill);
// drinkRefill('Lemonade', true, refill);
// // next two will generate errors
// drinkRefill('Lemonade', false, refill);
// drinkRefill(null, true, refill);
