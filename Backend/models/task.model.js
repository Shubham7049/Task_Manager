import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title:{
      type:String,
      required:true,
      trim:true
    },
    priority:{
      type:String,
      enum:["Low","Medium","High"],
      required:true
    },
    status:{
      type:String,
      enum:["Pending","In Progress","Completed"],
      default:"Pending"
    },
    createdBy:{
      type:String,
    },
    assignedAt:{
      type:Date,
      default:Date.now
    },
    dueDate:{
      type:Date
    }
},{timestamps:true})

export const Task=mongoose.model("Task",taskSchema)