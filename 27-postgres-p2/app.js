//include the node postgres library
var pg = require('pg');
// this is needed for the new version of the pg, we import a parser for the sting that describes the db connection
var parseConnectionString = require('pg-connection-string');
// new version
const configuration = 'postgres://root:root@localhost/test';
const pool = new pg.Pool(typeof configuration === 'string' ? parseConnectionString.parse(configuration) : configuration);
// create user in the database if you don't have root user: CREATE USER root WITH SUPERUSER PASSWORD 'root';

//connect to a database

// write to the db
pool.connect(function(err, client, done) {
 // write a hat
 client.query(`insert into hats
 (name, material, height, brim, price, user_id)
 values
 ('cowboy', 'straw', '4', true, 160, 1)`, function(err, result) {
   //should print 'INSERT: 1'
   console.log(`${result.command}: ${result.rowCount}`);
   //call done, same as the read example
   done();
 });
});

// read from the db
pool.connect(function(err, client, done) {
 //request all of the hats
 client.query(`select * from hats`, function(err, result) {
   console.log(result.rows);
   //let pg know we're done with this client
   done();
 });
});

// dynamically form a query
pool.connect(function(err, client, done) {
 //request all of the hats
 client.query('select * from hats where material = $1 or material = $2 or material = $3', ['felt', 'cotton', 'velvet'], function(err, result) {
   //result now has rows where the hat material is `felt`
   console.log(result.rows);
   //let pg know we're done with this client
   done();
 });
});
//close the pg pool entirely.
//this is done so our node process will exit.
pool.end();
