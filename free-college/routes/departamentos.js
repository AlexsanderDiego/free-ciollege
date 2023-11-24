const { addDepartamento, getDepartamento, deleteDepartamento, editDepartamento } = require('../repository/departamentos-repository');
const express = require('express')
const router = express.Router()

// router.get('/cursos', async (req, res) => {
//     res.json(await getAlunosCursos());
// });


router.get('/', async (req, res) => {
    res.json(await getDepartamentos());
});

// router.get('/:id/cursos', async (req, res) => {
//     const id = req.params.id;
//     const aluno = await getAlunoCursos(id);
//     if (aluno) {
//         res.json(aluno);
//     } else {
//         res.status(404);
//         res.json();
//     }
// });

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const departamento = await getDepartamento(id);
    console.log(departamento);
    if (departamento) {
        res.json(departamento);
    } else {
        res.status(404);
        res.json();
    }
});

router.post('/', async (req, res) => {
    const departamento = req.body;
    const result = await addDepartamento(departamento);

    res.status(201);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    await deleteDepartamento(req.params.id);
    res.status(204);
    res.json();
});


router.put('/:id', async (req, res) => {
    const departamento = req.body;
    sala.id = req.params.id;
    const editedDepartamento = await editDepartamento(departamento);
    res.json(editedDepartamento);
});

module.exports = router;