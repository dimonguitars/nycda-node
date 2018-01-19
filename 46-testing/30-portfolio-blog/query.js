var pg = require('pg');
var parseConnectionString = require('pg-connection-string');
const connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/portfolio';
const pool = new pg.Pool(typeof connectionString === 'string' ? parseConnectionString.parse(connectionString) : connectionString);
//export the adapter function
module.exports = function(queryString, queryParameters, onComplete) {
 //normalize parameters, allowing only passing a query string and an optional `onComplete` handler
 if (typeof queryParameters == 'function') {
   onComplete = queryParameters;
   queryParameters = [];
 }
 //everything else is almost the same as before, replacing hard-coded strings and arrays with parameters
 pool.connect(function(err, client, done) {
   if (err) {
     console.log(`error: connection to database failed. connection string: "${connectionString}" ${err}`);
     if (client) {
       done(client);
     }
     //check if `onComplete` exists before calling
     if (onComplete) {
       onComplete(err);
     }
     return;
   }
   client.query(queryString, queryParameters, function(err, result, pool) {
     if (err) {
       done(client);
       console.log(`error: query failed: "${queryString}", "${queryParameters}", ${err}`);
     }
     else {
       done();
     }
     //check if `onComplete` exists before calling
     if (onComplete) {
       onComplete(err, result);
     }
   });
 });
};

// // create your table
// create table posts (
//  id serial primary key,
//  title text,
//  excerpt text,
//  body text,
//  date_posted timestamp DEFAULT current_timestamp
// );
// // make one test entry
// insert into posts (title, excerpt, body) values ('This is my test post 1', 'This is my test excerpt of the post 1.', 'This is my test content of my test post 1.');
// insert into posts (title, excerpt, body) values ('This is my test post 2', 'This is my test excerpt of the post 2.', 'This is my test content of my test post 2.');
