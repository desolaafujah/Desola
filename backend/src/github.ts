// TODO: this server should be set up listen for webhook deliveries at the URL and take action when it receives one
// the events we want to receive are last commits made to a repo
// i think with how it's set up, each repo would have their own info and i could track last commits and that would be what's displayed on the frontend
// particularly subscribing to a webhook to events that occur when code is pushed to a repo
// this server should respond by

import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { diff } from "util";

const app = express()
const PORT = 5020

app.use(express.json()) // to parse json
app.use(cors())


// for commit data
type CommitInfo = {
    repo: string;
    branch: string;
    message: string;
    author: string;
    url: string;
    timestamp: string;
};

// map to store latest commit per repo
const latestCommits: Record<string, CommitInfo> = {};



// webhook route
app.post("/webhook", (req, res) => {
    const event = req.headers["x-github-event"];

    if (event == "push") {
        const payload = req.body;

        const repo = payload.repository?.full_name;
        const branch = payload.ref?.split("/").pop();
        const latestCommit = payload.head_commit;

        if(!repo || !latestCommit) {
            return res.status(400).send("invalid payload");
        }

        latestCommits[repo] = {
            repo,
            branch,
            message: latestCommit.message,
            author: latestCommit.author.name,
            url: latestCommit.url,
            timestamp: latestCommit.timestamp,
        };

        console.log(`updated latest commit for ${repo}`);

    }

    res.status(200).send("webhook received");
})


// for frontend
// gets the latest commit and how long ago it happened
// frontend decides how and what to display
app.get("/currently-building", (req, res) => {
    const commits = Object.values(latestCommits);
    if(commits.length === 0) return res.status(404).json({ message: "no commits yet"});

    const latest = commits.sort(
        (a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0]!;

    const latestCommitTime = new Date(latest.timestamp).getTime();
    const now = Date.now();
    const diffDays = (now - latestCommitTime) / (1000 * 60 * 60 *24);

    res.json({
        repo: latest.repo,
        url: latest.url,
        timestamp: latest.timestamp,
        daysAgo: diffDays,
    });
});


app.listen(PORT, () => {
    console.log(`webhook server listening on port ${PORT}`)
})