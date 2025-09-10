import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5001;

// parse JSON
app.use(express.json());

// CORS middleware
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // optional, if sending cookies
  })
);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "desolafujah365@gmail.com",
    pass: "zezl twzi ivtx yfsm",
  },
});

// Endpoint
app.post("/api/send-name", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    await transporter.sendMail({
      from: "your_email@gmail.com",
      to: "desolafujah365@gmail.com",
      subject: "Someone entered their name!",
      text: `Name: ${name}`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
