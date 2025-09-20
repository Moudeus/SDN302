const Quiz = require("../models/quizModel");
const Question = require("../models/questionModel");

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("questions");
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate("questions");
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;
    const quiz = new Quiz({ title, description });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.quizId,
      { title, description },
      { new: true, runValidators: true }
    );
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.quizId);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getQuizzesWithKeyword = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate({
      path: "questions",
      match: { keywords: { $in: ["capital"] } },
    });
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addQuestionToQuiz = async (req, res) => {
  try {
    const { text, options, keywords, correctAnswerIndex } = req.body;
    const question = new Question({ text, options, keywords, correctAnswerIndex });
    await question.save();

    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    quiz.questions.push(question._id);
    await quiz.save();

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addQuestionsToQuiz = async (req, res) => {
  try {
    const questionsData = req.body;
    const questions = await Question.insertMany(
      questionsData.map((q) => ({
        text: q.text,
        options: q.options,
        keywords: q.keywords,
        correctAnswerIndex: q.correctAnswerIndex,
      }))
    );

    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    quiz.questions.push(...questions.map((q) => q._id));
    await quiz.save();

    res.status(201).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
