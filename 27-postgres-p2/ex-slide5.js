// // this is an exercise from slide 5 of PostgreSQL: Node.js Client lecture
// var pg = require('pg');
//
// var parseConnectionString = require('pg-connection-string');
// const configuration = 'postgres://root:root@localhost/test';
// const pool = new pg.Pool(typeof configuration === 'string' ? parseConnectionString.parse(configuration) : configuration);
//
// var user_name = process.argv[2];
// // chain the queries first finding the user id associated with this name and then getting all the hats with this user id
// pool.connect(function(err, client, done) {
//  if(err){
//    console.log(err);
//    return done(client);
//  }
//  client.query('select * from hats where user_id = (select id from users where name = $1)', [user_name], function(err, result) {
//    if(err){
//      console.log(err);
//      return done(client);
//    }
//    console.log(result.rows);
//    done();
//  });
// });
//
// pool.end();

// // using the query exported module
// var query = require('./query');
// query('select * from hats where material = $1', ['felt'], function(err, results){
//  //handle the error and results as appropriate.
//  console.log(results.rows);
// });

// refactor the ex5 with query
var query = require('./query');
var user_name = process.argv[2];
query('select * from hats where user_id = (select id from users where name = $1)', [user_name],function(err, results){
 //handle the error and results as appropriate.
 if(err){
  console.log(err);
  return done(client);
 }
 console.log(results.rows);
})
