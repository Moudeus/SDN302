const Appointment = require("../models/appointmentModel");
const Doctor = require("../models/doctorModel");

exports.bookAppointment = async (req, res) => {
  try {
    const { doctorId, timeSlot } = req.body;
    const userId = req.user.id; // Giả lập từ JWT

    const doctor = await Doctor.findById(doctorId);
    if (!doctor || !doctor.availableTimeSlots.includes(timeSlot)) {
      return res.status(400).json({ error: "Invalid time slot" });
    }

    const appointment = new Appointment({ userId, doctorId, timeSlot });
    await appointment.save();

    doctor.availableTimeSlots = doctor.availableTimeSlots.filter((slot) => slot !== timeSlot);
    await doctor.save();

    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("userId").populate("doctorId");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.searchAppointmentsByDate = async (req, res) => {
  try {
    const { start, end } = req.query;
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate >= endDate) {
      return res.status(400).json({ error: "Invalid date range" });
    }

    const appointments = await Appointment.find({
      createdAt: { $gte: startDate, $lte: endDate },
    })
      .populate("userId")
      .populate("doctorId");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
