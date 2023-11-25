const express = require('express')
const app = express()
const alunosRouter = require('./routes/alunos')
const salasRouter = require('./routes/salas')
const departamentosRouter = require('./routes/departamentos')
const professoresRouter = require('./routes/professores')
const cursosRouter = require('./routes/cursos')
const matriculasRouter = require('./routes/matriculas')
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!')
});

// Prefixo da rota de alunos /alunos
app.use('/alunos', alunosRouter);

// Prefixo da rota de salas /salas
app.use('/salas', salasRouter);

// Prefixo da rota de departamentos /departamentos
app.use('/departamentos', departamentosRouter);

// Prefixo da rota de professores /professores
app.use('/professores', professoresRouter);

// Prefixo da rota de matriculas /matriculas
app.use('/matriculas', matriculasRouter);

// Prefixo da rota de cursos /cursos
app.use('/cursos', cursosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
