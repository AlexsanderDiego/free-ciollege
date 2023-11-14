const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'universidades',
    'root',
    '12345',
    {
        host: 'localhost',
        dialect: 'mariadb'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection succesfull')
}).catch((error) => {
    console.log('Unable to connect whit database', error)
});

module.exports = {
    sequelize,
    DataTypes
}