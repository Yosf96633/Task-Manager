import {Schema , model} from "mongoose"
const taskSchema = new Schema({
    title:{
        type:String,
        requried:true,
    },
    description:{
        type:String,
        requried:true,
    },
    complete:{
        type:Boolean,
    }
})
const taskModel = model("Task" , taskSchema)

export default taskModel;