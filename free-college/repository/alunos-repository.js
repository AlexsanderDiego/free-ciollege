// var { execSql } = require('./conn');
// var { getMatriculasPorAlunoId } = require('./matriculas-repository');
// var { getProfessorPorCurso } = require('./professor-repository');

const {Alunos} = require('../models/modelAlunos')

//GET
async function getAlunos() {
    // return execSql('SELECT id, nome, email FROM Alunos', []);
    return Alunos.findAll({attributes:['id', 'nome', 'email']});
}

//POST
async function addAluno(aluno) {
    // return execSql('INSERT INTO Alunos (nome, email) VALUES (?, ?)', [aluno.nome, aluno.email]);
    try{
        const newAluno = await Alunos.create({nome:aluno.nome, email:aluno.email});
        console.log('Novo Aluno', newAluno)
    } catch(error) {
        console.log('Error creating student', error);
        throw error;
    }
}

//DELETE
async function deleteAluno(id) {
    // return execSql('DELETE FROM Alunos WHERE id = ?', [id]);
    return Alunos.destroy({where:{id}});
}

//PUT
async function editAluno(aluno) {
    // return execSql('UPDATE Alunos SET nome = ?, email = ? WHERE id = ?', [aluno.nome, aluno.email, aluno.id]);
    const updateAluno = await Alunos.findByPk(aluno.id);
    if (updateAluno) {
        updateAluno.nome = aluno.nome;
        updateAluno.email = aluno.email;
        await updateAluno.save();
        return updateAluno;
    }
    return null;
    
}

async function getAlunosCursos() {
    const alunos = await execSql('SELECT id, nome FROM Alunos', []);
    for (const aluno of alunos) {
        const matriculas = await execSql('SELECT m.id as matricula, c.nome as curso FROM Matriculas as m INNER JOIN Cursos as c ON m.curso_id = c.id WHERE m.aluno_id = ?', [aluno.id]);
        aluno['matriculas'] = matriculas;
    }
    return alunos;
}

async function getAlunoCursos(id) {
    const aluno = await getAluno(id);
    const matriculas = await getMatriculasPorAlunoId(id);
    const cursos = [];
    for (const matricula of matriculas) {
        const professor = await getProfessorPorCurso(matricula.curso_id);
        cursos.push({
            id: matricula.matricula,
            nome: matricula.curso,
            professor: professor
        });
    }
    aluno['cursos'] = cursos;
    return aluno;
}

async function getAluno(id) {
    const result = await execSql('SELECT id, nome, email FROM Alunos WHERE id = ?', [id]);
    return result[0];
}


async function execSql(sql, params) {
    return new Promise((resolve, reject)=>{
        conn.connection.query(sql, params, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

module.exports = {
    getAlunos,
    addAluno,
    getAluno,
    deleteAluno,
    editAluno,
    getAlunosCursos,
    getAlunoCursos
}
