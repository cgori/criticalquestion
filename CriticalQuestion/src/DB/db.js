const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '51.89.139.147',
  user: 'cgor',
  password: 'Mixing70',
  database: 'critical_question'
})

connection.connect()

// app.post('/', (req, res) => res.send('A post request'));

// app.delete('/', (req, res) => res.send('A delete request'));

// app.put('/', (req, res) => res.send('A put request'));



app.get('/', (req, res) => res.send(test() + req.query.id));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


// function test(){
//   connection.query('SELECT * FROM critical_question.user;', function (err, rows, fields) {
//     if (err) throw err

//     return rows[0].title;
//   })
// }

