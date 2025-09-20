# Quiz App Backend

## Installation
1. Clone the repository or create the project folder.
2. Create a `.env` file with:
    PORT=3000
    MONGO_URI=mongodb://127.0.0.1:27017/SimpleQuiz
3. Run `npm install` to install dependencies.
4. Ensure MongoDB is running locally (default port 27017).

## Running the Project
1. Start MongoDB server with `mongod`.
2. Run `node app.js` to start the server.

## API Testing with Postman
- **GET /api/quizzes**: Get all quizzes.
- **POST /api/questions**: Create a new question.
- **DELETE /api/quizzes/:id**: Delete a quiz.
- **GET /api/quizzes/:quizId/populate**: Get quiz with questions containing "capital".
- **POST /api/quizzes/:quizId/question**: Add a question to quiz.
- **POST /api/quizzes/:quizId/questions**: Add multiple questions to quiz.