const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  getAllAppointments,
  searchAppointmentsByDate,
} = require("../controllers/appointmentController");

const authMiddleware = (req, res, next) => {
  req.user = { id: "userIdExample" };
  next();
}; // Giả lập JWT

router.post("/appointments", authMiddleware, bookAppointment);
router.get("/appointments", getAllAppointments);
router.get("/appointmentsByDate", searchAppointmentsByDate);

module.exports = router;
