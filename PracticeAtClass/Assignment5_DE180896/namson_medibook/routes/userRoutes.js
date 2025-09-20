const express = require("express");
const router = express.Router();
const { getAllUsers, deleteUser, postUser } = require("../controllers/userController");

router.get("/users", getAllUsers);
router.delete("/users/:userId", deleteUser);
router.post("/users", postUser);

module.exports = router;
