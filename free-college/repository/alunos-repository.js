// var { execSql } = require('./conn');
// var { getMatriculasPorAlunoId } = require('./matriculas-repository');
// var { getProfessorPorCurso } = require('./professor-repository');

const { Alunos } = require("../models/modelAlunos");
const { Cursos } = require("../models/modelCursos");
const { Matriculas } = require("../models/modelMatriculas");
const { Professores } = require("../models/modelProfessores");
const { Relacionamentos } = require("../models/relacionamentosTables");

//GET
async function getAlunos() {
  // return execSql('SELECT id, nome, email FROM Alunos', []);
  return Alunos.findAll({ attributes: ["id", "nome", "email"] });
}

//POST
async function addAluno(aluno) {
  // return execSql('INSERT INTO Alunos (nome, email) VALUES (?, ?)', [aluno.nome, aluno.email]);
  try {
    const newAluno = await Alunos.create({
      nome: aluno.nome,
      email: aluno.email,
    });
    console.log("Novo Aluno", newAluno);
  } catch (error) {
    console.log("Error creating student", error);
    throw error;
  }
}

//DELETE
async function deleteAluno(id) {
  // return execSql('DELETE FROM Alunos WHERE id = ?', [id]);
  return Alunos.destroy({ where: { id } });
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
  // const alunos = await execSql("SELECT id, nome FROM Alunos", []);
  // for (const aluno of alunos) {
  //   const matriculas = await execSql(
  //     "SELECT m.id as matricula, c.nome as curso FROM Matriculas as m INNER JOIN Cursos as c ON m.curso_id = c.id WHERE m.aluno_id = ?",
  //     [aluno.id]
  //   );
  //   aluno["matriculas"] = matriculas;
  // }
  // return alunos;
  try {
    const alunos = await Alunos.findAll({ attributes: ["id", "nome"] });

    for (const aluno of alunos) {
      const matriculas = await aluno.getMatriculas({ include: Cursos });
      aluno.dataValues.matriculas = matriculas;
    }
    return alunos;
  } catch (error) {
    throw new Error("Error ao buscar alunos e cursos" + error.message);
  }
}

async function getAlunoCursos(id) {
  try {
    const aluno = await Alunos.findByPk(id, { attributes: ["id", "nome"] });
    if (!aluno) {
      throw new Error("Erro ao encontrar aluno");
    }
    const matriculas = await aluno.getMatriculas({ include: Cursos });
    console.log(matriculas)
    aluno.dataValues.matriculas = matriculas;
    console.log(aluno.dataValues)
    return aluno;
  } catch {
    throw new Error("Erro ao buscar aluno e cursos por ID" + error.message);
  }
}

async function getAluno(id) {

  // Utilizando o método findByPk do modelo Aluno
  const aluno = await Alunos.findByPk(id);

  if (aluno) {
    console.log(`Nome: ${aluno.nome}, Email: ${aluno.email}`);
    return aluno;
  } else {
    console.log("Aluno não encontrado");
  }
}

module.exports = {
  getAlunos,
  addAluno,
  getAluno,
  deleteAluno,
  editAluno,
  getAlunosCursos,
  getAlunoCursos,
};
