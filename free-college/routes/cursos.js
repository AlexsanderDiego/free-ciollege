const { getCursos, getCurso, addCurso, deleteCurso, editCurso } = require('../repository/cursos-repository');
const express = require('express');
const router = express.Router()

// router.get('/cursos', async (req, res) => {
//     res.json(await getAlunosCursos());
// });


router.get('/', async (req, res) => {
    res.json(await getCursos());
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
    const curso = await getCurso(id);
    if (curso) {
        res.json(curso);
        console.log(curso.dataValues);
    } else {
        res.status(404);
        res.json();
    }
});

router.post('/', async (req, res) => {
    const curso = req.body;
    const result = await addCurso(curso);

    res.status(201);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    await deleteCurso(req.params.id);
    res.status(204);
    res.json();
});


router.put('/:id', async (req, res) => {
    const curso = req.body;
    curso.id = req.params.id;
    const editedCurso = await editCurso(curso);
    res.json(editedCurso);
});

module.exports = router;