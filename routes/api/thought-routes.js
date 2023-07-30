const router = require('express').Router();
const { getThoughts, getThoughtById, createThought, updateThought } = require('../../controllers/thought-controller');

router.get('/', getThoughts);
router.get('/:id', getThoughtById);
router.post('/', createThought);
router.put('/:id', updateThought);

module.exports = router;