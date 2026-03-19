const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vidya@121',
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    console.error('MySQL Error:', err);
  } else {
    console.log('MySQL Connected ✅');
  }
});

module.exports = db;