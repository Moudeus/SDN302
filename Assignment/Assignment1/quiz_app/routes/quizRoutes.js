const express = require("express");
const router = express.Router();
const {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizzesWithKeyword,
  addQuestionToQuiz,
  addQuestionsToQuiz,
} = require("../controllers/quizController");

router.get("/quizzes", getAllQuizzes);
router.get("/quizzes/:quizId", getQuizById);
router.post("/quizzes", createQuiz);
router.put("/quizzes/:quizId", updateQuiz);
router.delete("/quizzes/:quizId", deleteQuiz);
router.get("/quizzes/:quizId/populate", getQuizzesWithKeyword);
router.post("/quizzes/:quizId/question", addQuestionToQuiz);
router.post("/quizzes/:quizId/questions", addQuestionsToQuiz);

module.exports = router;
