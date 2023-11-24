const {Departamentos} = require('../models/modelDepartamento')

//GET
async function getDepartamentos() {
    return Departamentos.findAll({attributes:['id', 'nome']});
}

//POST
async function addDepartamento(departamento) {
    try{
        const newDepartamentos = await Departamentos.create({nome:departamento.nome});
        console.log('Nova Departamentos', newDepartamentos)
    } catch(error) {
        console.log('Error creating Departamentos', error);
        throw error;
    }
}

//DELETE
async function deleteDepartamento(id) {
    return Departamentos.destroy({where:{id}});
}

//PUT
async function editDepartamento(departamento) {
    const updateDepartamento = await Salas.findByPk(departamento.id);
    if (updateDepartamento) {
        updateDepartamento.nome = departamento.nome;
        await updateDepartamento.save();
        return updateDepartamento;
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

async function getDepartamento(id) {

    // Utilizando o método findByPk do modelo Aluno
    const departamento = await Departamentos.findByPk(id);
  
    if (departamento) {
      console.log(`Nome: ${departamento.nome}`);
      return departamento;
    } else {
      console.log("Departamento não encontrado");
    }
  }

module.exports = {
    getDepartamentos,
    addDepartamento,
    deleteDepartamento,
    editDepartamento,
    getDepartamento,
    // getAlunosCursos,
    // getAlunoCursos
}
