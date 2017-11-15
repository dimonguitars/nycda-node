//include the node postgres library
var pg = require('pg');
// this is needed for the new version of the pg, we import a parser for the sting that describes the db connection
var parseConnectionString = require('pg-connection-string');
// new version
const configuration = 'postgres://root:root@localhost/test';
const pool = new pg.Pool(typeof configuration === 'string' ? parseConnectionString.parse(configuration) : configuration);
// create user in the database if you don't have root user: CREATE USER root WITH SUPERUSER PASSWORD 'root';
//connect to a database
pool.connect(function(err, client, done) {
 //request all of the hats
 client.query(`select * from hats`, function(err, result) {
   console.log(result.rows);
   //let pg know we're done with this client
   done();
 });
});
//close the pg pool entirely.
//this is done so our node process will exit.
pool.end();
