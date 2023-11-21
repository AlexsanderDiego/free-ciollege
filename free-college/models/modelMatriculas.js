const { DataTypes, sequelize } = require('./modelConection')

const Matriculas = sequelize.define('Matriculas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Alunos',
            key: 'id',
        },
    },
    curso_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Cursos',
            key: 'id',
        },
    },
}, {
    tableName: 'Matriculas',
    timestamps: false,
})

sequelize.sync().then(() => {
    console.log('tables Matriculas created successfully')
}).catch ((error) => {
    console.log('Internal Error', error)
})

module.exports = {
    Matriculas
}