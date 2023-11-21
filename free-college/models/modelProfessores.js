const { DataTypes, sequelize } = require('./modelConection')

const Professores = sequelize.define('Professores', {
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
    departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'Departamentos',
            key:'id',
        },
    },
}, {
    tableName: 'Professores',
    timestamps: false,
})

sequelize.sync().then(() => {
    console.log('tables Professores created successfully')
}).catch ((error) => {
    console.log('Internal Error', error)
})

module.exports = {
    Professores
}