const { getProfessores, getProfessor, addProfessor, deleteProfessor, editProfessor } = require('../repository/professor-repository');
const express = require('express');
const router = express.Router()

// router.get('/cursos', async (req, res) => {
//     res.json(await getAlunosCursos());
// });


router.get('/', async (req, res) => {
    res.json(await getProfessores());
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
    const professor = await getProfessor(id);
    if (professor) {
        res.json(professor);
        console.log(professor.dataValues);
    } else {
        res.status(404);
        res.json();
    }
});

router.post('/', async (req, res) => {
    const professor = req.body;
    const result = await addProfessor(professor);

    res.status(201);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    await deleteProfessor(req.params.id);
    res.status(204);
    res.json();
});


router.put('/:id', async (req, res) => {
    const professor = req.body;
    professor.id = req.params.id;
    const editedProfessor = await editProfessor(professor);
    res.json(editedProfessor);
});

module.exports = router;