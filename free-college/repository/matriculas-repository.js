const { Cursos } = require('../models/modelCursos');
const {Departamentos} = require('../models/modelDepartamento');
const { Matriculas } = require('../models/modelMatriculas');

//GET
async function getMatriculas() {
    return Matriculas.findAll({attributes:['id', 'aluno_id', 'curso_id']});
}

//POST
async function addMatricula(matricula) {
    try{
        const newMatriculas = await Matriculas.create({aluno_id:matricula.aluno_id, curso_id:matricula.curso_id});
        console.log('Nova Matriculas', newMatriculas)
    } catch(error) {
        console.log('Error creating Matriculas', error);
        throw error;
    }
}

//DELETE
async function deleteMatricula(id) {
    return Matriculas.destroy({where:{id}});
}

//PUT
async function editMatricula(matricula) {
    const updateMatricula = await Matriculas.findByPk(matricula.id);
    if (updateMatricula) {
        updateMatricula.professor_id = matricula.professor_id;
        updateMatricula.sala_id = matricula.sala_id;
        await updateMatricula.save();
        return editMatricula;
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

async function getMatricula(id) {

    // Utilizando o método findByPk do modelo Aluno
    const matricula = await Matriculas.findByPk(id);
  
    if (matricula) {
      console.log(`Nome: ${matricula.nome}`);
      return matricula;
    } else {
      console.log("Matricula não encontrado");
    }
  }

module.exports = {
    getMatriculas,
    addMatricula,
    deleteMatricula,
    editMatricula,
    getMatricula,
    // getAlunosCursos,
    // getAlunoCursos
}
