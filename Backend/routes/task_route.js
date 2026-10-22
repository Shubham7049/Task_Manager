import express from "express";
import { getTasks ,createTask,getTaskByID,updateTask,deleteTask} from "../controllers/task.controller.js";

const router = express.Router();



router.get("/",getTasks);
router.get("/:id",getTaskByID)
router.post("/",createTask);
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask);

export default router;
