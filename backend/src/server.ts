import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8080", "https://www.desolafujah.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// ======================
// 💌 Nodemailer endpoint
// ======================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-name", async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVING_EMAIL || process.env.EMAIL_USER,
      subject: "Someone entered their name!",
      text: `Name: ${name}`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ======================
// 🧱 GitHub webhook logic
// ======================

type CommitInfo = {
  repo: string;
  branch: string;
  message: string;
  author: string;
  url: string;
  timestamp: string;
};

const latestCommits: Record<string, CommitInfo> = {};

app.post("/webhook", (req, res) => {
  const event = req.headers["x-github-event"];

  if (event === "push") {
    const payload = req.body;
    const repo = payload.repository?.full_name;
    const branch = payload.ref?.split("/").pop();
    const latestCommit = payload.head_commit;

    if (!repo || !latestCommit) {
      return res.status(400).send("Invalid payload");
    }

    latestCommits[repo] = {
      repo,
      branch,
      message: latestCommit.message,
      author: latestCommit.author.name,
      url: latestCommit.url,
      timestamp: latestCommit.timestamp,
    };

    console.log(`✅ Updated latest commit for ${repo}`);
  }

  res.status(200).send("Webhook received");
});

app.get("/currently-building", (req, res) => {
  const commits = Object.values(latestCommits);
  if (commits.length === 0)
    return res.status(404).json({ message: "no commits yet" });

  const latest = commits.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )[0]!;

  const latestCommitTime = new Date(latest.timestamp).getTime();
  const now = Date.now();
  const diffDays = (now - latestCommitTime) / (1000 * 60 * 60 * 24);

  res.json({
    repo: latest.repo,
    url: latest.url,
    timestamp: latest.timestamp,
    daysAgo: diffDays,
  });
});

// ======================
// ✅ Start the server
// ======================
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
