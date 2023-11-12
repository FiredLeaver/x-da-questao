// tentativa 1
const Sequelize = require('sequelize');

const conexao = new Sequelize("xdaQuestao", "root", "bito132", {
    host: 'localhost',
    dialect: 'mysql'
});

conexao.authenticate()
.then(function(){
    console.log("deu pra conectar co banco de dadoskkj");
}).catch(function(){
    console.log("erru: n deu pra conectar co banco de dadoskkj");
});


/* tentativa 4
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bito132",
  database: "mxdaQuestaoydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM usuarios", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
  }); */

/* tentatiav 3
const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);


async function selectClients(){
    const res = await client.query('SELECT * FROM usuarios');
    return res[0];
} 
 
module.exports = { selectCustomers } */

/* tetativa 2
async function connect(){
if (global.connection && global.connection.state)

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root/:bito132@localhost:3306/xDaQuestao");
    global.connection = connection;
    return connection;
}

async function selectClients(){
    const conn = conexao;
    return await conn.query('SELECT * FROM usuarios;');
}

module.exports = (selectClients ) */


module.exports = conexao;