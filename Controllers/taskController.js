import taskModel from "../Models/taskModel.js";

//post request::add tasks
export const addTask = async (req, res) => {
  try {
    const result = await taskModel.create({
      title: req.body.title,
      description: req.body.description,
      complete: false,
    });
    return res
      .status(201)
      .json({ message: `${req.body.title} added`, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Internal server error`, success: false });
  }
};
//get request::fetch all tasks
export const getTask = async (req, res) => {
  const tasks = await taskModel.find({});
  if (!tasks) return res.status(400).json({ message: `No task yet` });
  return res.status(200).json({ data: tasks, success: true });
};
//delete request::for delete specific tasks
export const deleteTask = async (req, res) => {
  const result = await taskModel.deleteOne({ _id: req.params.id });
  if (!result)
    return res
      .status(400)
      .json({ message: `${req.params.id} did not found`, success: false });
  return res
    .status(200)
    .json({ message: `${req.params.id} deleted`, success: true });
};
//patch request:: update partially
export const updateTask = async (req, res) => {
  const result = await taskModel.findOneAndUpdate({_id:req.params.id}, req.body, {
    new: true,
  });
  if(!result)
    return res
      .status(400)
      .json({ message: `${req.params.id} did not found`, success: false });
      return res
      .status(200)
      .json({ message: `${req.params.id} update`, success: true });
};
