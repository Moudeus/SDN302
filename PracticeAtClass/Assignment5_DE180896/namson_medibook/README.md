# namso_medibook - Medical Appointment Booking System

## Installation

1. Clone the repository or create the project folder.
2. Create a `.env` file with:
3. Run `npm install` to install dependencies.
4. Ensure MongoDB is running locally (default port 27017).

## Running the Project

1. Start MongoDB server with `mongod`.
2. Run `node app.js` to start the server.

## API Testing with Postman

- **GET /api/user/users**: Retrieve all users.
- **DELETE /api/user/users/:userId**: Delete a user (returns error if appointments exist).
- **POST /api/appointment/appointments**: Book an appointment (body: `{ doctorId, timeSlot }`).
- **GET /api/appointment/appointments**: Get all appointments.
- **GET /api/appointment/appointmentsByDate?start=YYYY-MM-DD&end=YYYY-MM-DD**: Search appointments by date range.
