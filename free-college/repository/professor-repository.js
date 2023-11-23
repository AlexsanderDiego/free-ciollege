const { Professores } = require('../models/modelProfessores')

//GET
async function getProfessores() {
    return Professores.findAll({attributes:['id', 'nome', 'departamento_id']});
}

//POST
async function addProfessor(professor) {
    try{
        const newProfessor = await Professores.create({nome:professor.nome, departamento_id:professor.departamento_id});
        console.log('Novo Professor', newProfessor)
    } catch(error) {
        console.log('Error creating Professor', error);
        throw error;
    }
}

//DELETE
async function deleteProfessor(id) {
    return Professores.destroy({where:{id}});
}

//PUT
async function editProfessor(professor) {
    const updateProfessor = await Salas.findByPk(professor.id);
    if (updateDepartamento) {
        updateProfessor.nome = professor.nome;
        await updateProfessor.save();
        return updateProfessor;
    }
    return null;
    
}

// async function getAlunosCursos() {
//     const alunos = await execSql('SELECT id, nome FROM Alunos', []);
//     for (const aluno of alunos) {
//         const matriculas = await execSql('SELECT m.id as matricula, c.nome as curso FROM Matriculas as m INNER JOIN Cursos as c ON m.curso_id = c.id WHERE m.aluno_id = ?', [aluno.id]);
//         aluno['matriculas'] = matriculas;
//     }
//     return alunos;
// }

// async function getAlunoCursos(id) {
//     const aluno = await getAluno(id);
//     const matriculas = await getMatriculasPorAlunoId(id);
//     const cursos = [];
//     for (const matricula of matriculas) {
//         const professor = await getProfessorPorCurso(matricula.curso_id);
//         cursos.push({
//             id: matricula.matricula,
//             nome: matricula.curso,
//             professor: professor
//         });
//     }
//     aluno['cursos'] = cursos;
//     return aluno;
// }

// async function getAluno(id) {
//     const result = await execSql('SELECT id, nome, email FROM Alunos WHERE id = ?', [id]);
//     return result[0];
// }

module.exports = {
    getProfessores,
    addProfessor,
    deleteProfessor,
    editProfessor,
    // getAluno,
    // getAlunosCursos,
    // getAlunoCursos
}
