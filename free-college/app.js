const express = require('express')
const app = express()
const carrosRouter = require('./routes/carros')
const pessoasRouter = require('./routes/pessoas')
const alunosRouter = require('./routes/alunos')
const salasRouter = require('./routes/salas')
const departamentosRouter = require('./routes/departamentos')
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!')
});

// Prefixo da rota de carros /carros
app.use('/carros', carrosRouter);

// Prefixo da rota de pessoas /pesssoas
app.use('/pessoas', pessoasRouter);

// Prefixo da rota de alunos /alunos
app.use('/alunos', alunosRouter);

// Prefixo da rota de salas /salas
app.use('/salas', salasRouter);

// Prefixo da rota de departamentos /departamentos
app.use('/departamentos', departamentosRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
