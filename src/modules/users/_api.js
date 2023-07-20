const express = require("express");
const { postUser, getUsers, getUser, patchUser, updatePassword, deleteUser } = require("./_controllers");

const router = express.Router();

router.post("/users", postUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.patch('/users/:id', patchUser);
router.put('/users/:id', updatePassword);
router.delete('/users/:id', deleteUser);

module.exports = router;
