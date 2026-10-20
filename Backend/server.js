import express from "express";
import taskRoutes from "./routes/task_route.js";
import connectDB from "./config/db.js";
import "dotenv/config"

const PORT=process.env.PORT||3000;
await connectDB();

const app = express();

app.use(express.json())

app.get("/api/v1/", (req, res) => {
  res.send("Hello this is my Backend Landing Page");
});

app.use("/api/v1/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}/api/v1/`);
});
