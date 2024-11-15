import { Router } from "express";
import { addTask, deleteTask, getTask, updateTask } from "../Controllers/taskController.js";
const taskRouter = Router();
taskRouter.get("/", getTask);
taskRouter.post(
  "/",
  (req, res, next) => {
    if (!req.body || !req.body.title || !req.body.description)
      return res
        .status(400)
        .json({ message: `Please fill all entries`, success: false });
    next();
  },
  addTask
);
taskRouter.delete("/:id" , (req , res , next)=>{
      if(!req.params.id)
        return res.status(400).json({message:`Please enter valid id`})
    next();
} , deleteTask)
taskRouter.patch("/:id" , (req , res , next)=>{
     if(!req.body || !req.params.id)
        return res.status(400).json({message:`Entries missing` , success:false})
    next();
} ,  updateTask);


export default taskRouter;
