const { DataTypes, sequelize } = require('./modelConection')

// const { Sequelize, DataTypes } = require("sequelize");


//   const sequelize = new Sequelize("universidades", "root", "12345", {
//     host: "localhost",
//     dialect: "mariadb",
//   });

//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log("Connection succesfull");
//     })
//     .catch((error) => {
//       console.log("Unable to connect whit database", error);
//     });


//NÃO SENDO USADO - APAGAR FUTURAMENTE
// async function execSql(sql, params) {
//     return new Promise((resolve, reject) => {
//         pool.query(sql, params, function (error, results, fields) {
//             if (error) {
//                 return reject(error);
//             }
//             return resolve(results);
//         });
//     });
// }

const Alunos = sequelize.define(
  "Alunos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "Alunos",
    timestamps: false,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("tables Alunos created successfully");
  })
  .catch((error) => {
    console.log("Internal Error", error);
  });

module.exports = {
  Alunos,
};
