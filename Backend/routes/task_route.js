import express from "express";

const router = express.Router();

const taskArray = [];

router.get("/", (req, res) => {
  res.json(taskArray);
});

router.post("/", (req, res) => {
  const { title, priority, status, createdby, DataAssigned, dueDate } =
    req.body;

  if (!title) {
    return res.status(400).json({
      message: "title is required",
      success: false,
    });
  }

  if (!priority) {
    return res.status(400).json({
      message: "priority is required",
      success: false,
    });
  }

  const task = {
    title,
    priority,
    status,
    createdby,
    DataAssigned,
    dueDate,
  };

  taskArray.push(task);

  res.status(201).json({
    task,
    success: true,
  });
});

export default router;
