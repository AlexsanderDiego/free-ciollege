const { getMatriculas, getMatricula, addMatricula, deleteMatricula, editMatricula } = require('../repository/matriculas-repository');
const express = require('express');
const router = express.Router()

// router.get('/cursos', async (req, res) => {
//     res.json(await getAlunosCursos());
// });


router.get('/', async (req, res) => {
    res.json(await getMatriculas());
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
    const matricula = await getMatricula(id);
    if (matricula) {
        res.json(matricula);
        console.log(matricula.dataValues);
    } else {
        res.status(404);
        res.json();
    }
});

router.post('/', async (req, res) => {
    const matricula = req.body;
    const result = await addMatricula(matricula);

    res.status(201);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    await deleteMatricula(req.params.id);
    res.status(204);
    res.json();
});


router.put('/:id', async (req, res) => {
    const matricula = req.body;
    matricula.id = req.params.id;
    const editedMatricula = await editMatricula(matricula);
    res.json(editedMatricula);
});

module.exports = router;