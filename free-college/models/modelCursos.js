const { DataTypes, sequelize } = require('./modelConection')

const Cursos = sequelize.define('Cursos', {
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
    professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Professores',
            key: 'id',
        },
    },
    sala_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Salas',
            key: 'id',
        },
    },
}, {
    tableName: 'Cursos',
    timestamps: false,
})

sequelize.sync().then(() => {
    console.log('tables Cursos created successfully')
}).catch ((error) => {
    console.log('Internal Error', error)
})

module.exports = {
    Cursos
}