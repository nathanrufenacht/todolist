const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let tasks = [];
let nextId = 1;

/* =========================
   GET ALL TASKS
========================= */
app.get("/api/tasks", (req, res) => {
    res.status(200).json(tasks);
});

/* =========================
   ADD TASK
========================= */
app.post("/api/tasks", (req, res) => {
    const { text, priority } = req.body;

    if (!text || text.trim() === "") {
        return res.status(400).json({ message: "Text is required" });
    }

    const newTask = {
        id: nextId++,
        text,
        priority: priority || "low"
    };

    tasks.push(newTask);

    res.status(201).json({ message: "Task created", task: newTask });
});

/* =========================
   UPDATE TASK
========================= */
app.put("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { text, priority } = req.body;

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    if (!text || text.trim() === "") {
        return res.status(400).json({ message: "Text cannot be empty" });
    }

    task.text = text;
    task.priority = priority || task.priority;

    res.status(200).json({ message: "Task updated", task });
});

/* =========================
   DELETE TASK
========================= */
app.delete("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const originalLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length === originalLength) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted" });
});

/* =========================
   ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
