const router = require('express').Router();
const { getUsers, getUserById, createUser, updateUser } = require('../../controllers/user-controller');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router;