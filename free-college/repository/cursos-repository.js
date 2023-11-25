const { Cursos } = require('../models/modelCursos');
const {Departamentos} = require('../models/modelDepartamento')

//GET
async function getCursos() {
    return Cursos.findAll({attributes:['id', 'nome', 'professor_id', 'sala_id']});
}

//POST
async function addCurso(curso) {
    try{
        const newCursos = await Cursos.create({nome:curso.nome, professor_id:curso.professor_id, sala_id:curso.sala_id});
        console.log('Nova Cursos', newCursos)
    } catch(error) {
        console.log('Error creating Cursos', error);
        throw error;
    }
}

//DELETE
async function deleteCurso(id) {
    return Cursos.destroy({where:{id}});
}

//PUT
async function editCurso(curso) {
    const updateCurso = await Cursos.findByPk(curso.id);
    if (updateCurso) {
        updateCurso.nome = curso.nome;
        updateCurso.professor_id = curso.professor_id;
        updateCurso.sala_id = curso.sala_id;
        await updateCurso.save();
        return editCurso;
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

async function getCurso(id) {

    // Utilizando o método findByPk do modelo Aluno
    const curso = await Cursos.findByPk(id);
  
    if (curso) {
      console.log(`Nome: ${curso.nome}`);
      return curso;
    } else {
      console.log("Curso não encontrado");
    }
  }

module.exports = {
    getCursos,
    addCurso,
    deleteCurso,
    editCurso,
    getCurso,
    // getAlunosCursos,
    // getAlunoCursos
}
