import express, { json } from "express";
import taskRoutes from "./routes/task_route.js";

const app = express();

app.use(express.json())

app.get("/api/v1/", (req, res) => {
  res.send("Hello this is my Backend Landing Page");
});

app.use("/api/v1/tasks", taskRoutes);

app.listen(3000, () => {
  console.log(`Server is Listening on ${'http://localhost:3000/api/v1/'}`);
});
