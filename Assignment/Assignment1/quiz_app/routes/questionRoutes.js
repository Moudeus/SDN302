const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

router.get("/questions", getAllQuestions);
router.get("/questions/:questionId", getQuestionById);
router.post("/questions", createQuestion);
router.put("/questions/:questionId", updateQuestion);
router.delete("/questions/:questionId", deleteQuestion);

module.exports = router;
