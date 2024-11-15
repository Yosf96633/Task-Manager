import express from "express";
import connectDB from "./config.js";
import taskRouter from "./Routes/taskRoute.js";
const app = express();
const PORT = 8000;
connectDB(
  `mongodb+srv://yosf96633:3gvCozvPIQbkZOfC@cluster0.fwfae.mongodb.net/Task?retryWrites=true&w=majority`
)
  .then(() => {
    console.log("MongoDB connect");
  })
  .catch(() => {
    console.log("Something went wrong while connecting to Mongo");
  });
  app.use(express.urlencoded({extended:true}));
app.use("/task" , taskRouter);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
