var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

dbConnection.query('SELECT * FROM messages', function(err, results) {
  if (err) throw err;
  console.log(results[0].message, 'Hi I worked');
  return results;
});