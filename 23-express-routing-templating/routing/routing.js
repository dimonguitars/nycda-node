var express = require('express');
var app = express();

app.get('/myFirstRoute', function(request, response) {
 console.log(request.query);
 response.send('<body><h1>hello everyone!</h1></body>');
});

app.get('/', function(req, res){
  res.send('<h1>Hello my dear friend!</h1>');
});

app.get('/redirect', function(req, res){
  res.redirect('/myFirstRoute');
});

app.get('/list/:name', function(req, res){
  res.send(`<h1>Hello ${req.params.name}!</h1>`);
});

// ex2: playing with query params
// app.get('/messages', function(req, res){
//   var data = '';
//   if(req.query.message_1){
//     data += `<h1>${req.query.message_1}</h1>`;
//   }
//   if (req.query.message_2){
//     data += `<h1>${req.query.message_2}</h1>`;
//   }
//   if(!req.query.message_1 && !req.query.message_2){
//     data += '<h1>No query params? Get a generic message!:P</h1>';
//   }
//   res.send(data);
// });

// // Bonus: any number of messages
// app.get('/messages', function(req, res){
//   var data = '';
//   // check if query object is empty
//   if (Object.keys(req.query).length === 0 && req.query.constructor === Object){
//     data += '<h1>No query params? Get a generic message!:P</h1>';
//   }
//   else{
//     // otherwise, for each key in the query filter out those with 'message_' in them and append their value to the data sting
//     for(key in req.query){
//       if(key.indexOf('message_') !== -1){
//         data += `<h1>${req.query[key]}</h1>`;
//       }
//     }
//   }
//   // console.log(data);
//   res.send(data);
// });

// // ex 3 accepting post also
// // test using (you must envelop the url string in quotes for it to accept the whole query string):
// // curl -X POST 'http://localhost:3030/messages?message_1=hello&message_2=blah&nnn=nnnn&message_7456=bigggg&blahmessage_6767=ooopa&random=ttttt'
//
// app.post('/messages', function(req, res){
//   var data = '';
//   if (Object.keys(req.query).length === 0 && req.query.constructor === Object){
//     data += '<h1>No query params? Get a generic message!:P</h1>';
//   }
//   else{
//     for(key in req.query){
//       if(key.indexOf('message_') !== -1){
//         data += `<h1>${req.query[key]}</h1>`;
//       }
//     }
//   }
//   res.send(data);
// });

app.get('*', function(req, res) {
  res.status(404).send('<h1>uh oh! page not found!</h1>');
});

var server = app.listen(3030, function(){
  console.log('Open http://localhost:3030 in the browser');
});
