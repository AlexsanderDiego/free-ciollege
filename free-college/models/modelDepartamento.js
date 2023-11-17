const { DataTypes, sequelize } = require('./modelConection')

const Departamentos = sequelize.define('Departamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, {
    tableName: 'Departamentos',
    timestamps: false,
})

sequelize.sync().then(() => {
    console.log('tables Departamentos created successfully')
}).catch ((error) => {
    console.log('Internal Error', error)
})

module.exports = {
    Departamentos
}