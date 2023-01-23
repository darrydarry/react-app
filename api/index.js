var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "users",
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const newbie = {
    name : 'test',
    email: 'test@test.com',
    password: 'test',
    register_date: Date().toString(),
}

let createQuery = `insert into users (name, email, password, registration_date) values ('${newbie.name}', '${newbie.email}', '${newbie.password}', '${newbie.register_date}');`
let selectQuery = `select * from users;`;
let updateQuery = `UPDATE users SET is_active = true WHERE name = '${newbie.name}';`
let deleteQuery = `DELETE FROM users WHERE email = '${newbie.email}';`

// получить всех пользователей
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(selectQuery, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    con.query(updateQuery, 
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    con.query(deleteQuery, 
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    con.query(createQuery,  
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });

    con.query(selectQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });

  });