const mysql = require('mysql2/promise')

const db = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'hotel_management'

})


db.on('connection', function (connection) {
  console.log('DB Connection established');

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });

});

module.exports = db