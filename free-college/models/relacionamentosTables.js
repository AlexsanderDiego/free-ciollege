const { Alunos } = require("../models/modelAlunos");
const { Cursos } = require("../models/modelCursos");
const { Matriculas } = require("../models/modelMatriculas");
const { Professores } = require("../models/modelProfessores");
const { Salas } = require("../models/modelSala");
const { Departamentos } = require("../models/modelDepartamento");

function relacionamento() {
    
  // Aluno tem várias matrículas
  Alunos.hasMany(Matriculas, { foreignKey: "aluno_id" });
  Matriculas.belongsTo(Alunos, { foreignKey: "aluno_id" });

  // Curso possui várias matrículas
  Cursos.hasMany(Matriculas, { foreignKey: "curso_id" });
  Matriculas.belongsTo(Cursos, { foreignKey: "curso_id" });

  // Curso pertence a um Professor
  Cursos.belongsTo(Professores, { foreignKey: "professor_id" });
  Professores.hasMany(Cursos, { foreignKey: "professor_id" });

  // Curso pertence a uma Sala
  Cursos.belongsTo(Salas, { foreignKey: "sala_id" });
  Salas.hasOne(Cursos, { foreignKey: "sala_id" });
}

module.exports = {
  relacionamento,
};
