const { DataTypes, sequelize } = require('./modelConection')

const Salas = sequelize.define('Salas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'Salas',
    timestamps: false,
})

sequelize.sync().then(() => {
    console.log('tables Salas created successfully')
}).catch ((error) => {
    console.log('Internal Error', error)
})

module.exports = {
    Salas
}