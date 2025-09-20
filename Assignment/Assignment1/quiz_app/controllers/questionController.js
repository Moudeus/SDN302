const Question = require("../models/questionModel");

// Get all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get question by ID
exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ error: "Question not found" });
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new question
exports.createQuestion = async (req, res) => {
  try {
    const { text, options, keywords, correctAnswerIndex } = req.body;
    const question = new Question({ text, options, keywords, correctAnswerIndex });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { text, options, keywords, correctAnswerIndex } = req.body;
    const question = await Question.findByIdAndUpdate(
      req.params.questionId,
      { text, options, keywords, correctAnswerIndex },
      { new: true, runValidators: true }
    );
    if (!question) return res.status(404).json({ error: "Question not found" });
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.questionId);
    if (!question) return res.status(404).json({ error: "Question not found" });
    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
