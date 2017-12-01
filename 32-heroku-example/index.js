const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

var pg = require('pg');
var parseConnectionString = require('pg-connection-string');
const connectionString = 'postgres://rjozurdkqwwswt:ed34a60dd0e827c239889b418fbfeb4d9922f85bbde727730dd444596f4d614f@ec2-174-129-15-251.compute-1.amazonaws.com:5432/d6nldr1ftlj70m?ssl=true';
const pool = new pg.Pool(typeof connectionString === 'string' ? parseConnectionString.parse(connectionString) : connectionString);
// console.log(process.env.DATABASE_URL);
app.get('/db', function (request, response) {
  pool.connect(function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else
      { response.render('pages/db', {results: result.rows} ); }
    });
  });
});
