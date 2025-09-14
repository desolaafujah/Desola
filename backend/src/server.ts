import express, {Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// parse JSON
app.use(express.json());

// CORS middleware
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://www.desolafujah.com",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // optional, if sending cookies
  })
);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "process.env.EMAIL_USER",
    pass: "process.env.EMAIL_PASS",
  },
});

// Endpoint
app.post("/api/send-name", async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    await transporter.sendMail({
      from: "process.env.EMAIL_USER",
      to: "process.env.RECEIVING_EMAIL || process.env.EMAIL_USER",
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
