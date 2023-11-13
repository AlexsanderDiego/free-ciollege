var Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'universidade',
  'root',
  '12345',
  {
    host:'localhost',
    dialect:'mariadb'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection succesfull')
}).catch((error) => {
  console.log('Unable to connect whit database', error)
});

// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'admin',
//   password        : 'admin',
//   database        : 'Universidade'
// });

async function execSql(sql, params) {
  return new Promise((resolve, reject)=>{
      pool.query(sql, params, function (error, results, fields) {
          if (error) {
              return reject(error);
          }
          return resolve(results);
      });
  });
}

module.exports = {
  execSql
};
