const {Salas} = require('../models/modelSala')

//GET
async function getSalas() {
    return Salas.findAll({attributes:['id', 'numero', 'capacidade']});
}

//POST
async function addSala(sala) {
    try{
        const newSala = await Salas.create({numero:sala.numero, capacidade:sala.capacidade});
        console.log('Nova Sala', newSala)
    } catch(error) {
        console.log('Error creating sala', error);
        throw error;
    }
}

//DELETE
async function deleteSala(id) {
    return Salas.destroy({where:{id}});
}

//PUT
async function editSala(sala) {
    const updateSala = await Salas.findByPk(sala.id);
    if (updateSala) {
        updateSala.numero = sala.numero;
        updateSala.capacidade = sala.capacidade;
        await updateSala.save();
        return updateSala;
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
    getSalas,
    addSala,
    deleteSala,
    editSala,
    // getAluno,
    // getAlunosCursos,
    // getAlunoCursos
}
