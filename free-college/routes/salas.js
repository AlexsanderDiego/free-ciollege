const { getSalas, addSala, getSala, deleteSala, editSala, getAlunosCursos, getAlunoCursos } = require('../repository/salas-repository');
const express = require('express')
const router = express.Router()

// router.get('/cursos', async (req, res) => {
//     res.json(await getAlunosCursos());
// });


router.get('/', async (req, res) => {
    res.json(await getSalas());
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
    const sala = await getSala(id);
    if (sala) {
        res.json(sala);
        console.log(sala.dataValues);
    } else {
        res.status(404);
        res.json();
    }
});

router.post('/', async (req, res) => {
    const sala = req.body;
    const result = await addSala(sala);

    res.status(201);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    await deleteSala(req.params.id);
    res.status(204);
    res.json();
});


router.put('/:id', async (req, res) => {
    const sala = req.body;
    sala.id = req.params.id;
    await editSala(sala);
    return sala;
});

module.exports = router;