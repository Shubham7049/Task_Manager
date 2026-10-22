import { Task } from "../models/task.model.js";


const createTask=async(req,res)=>{
   try
   {
        const {title,priority,status,createdBy,assignedAt,dueDate}=req.body;
        if(!title || !priority)
        {
            return res.status(400).json({
              success:false,
              message:"title and priority are required"
            })
        }

        const task=await Task.create({
          title,
          priority,
          status,
          createdBy,
          assignedAt,
          dueDate
        })

        return res.status(201).json({  //201 when new task is created
          success:true,
          message:"Task created Successfully",
          data:task
        })

   }
   catch(error)
   {
      return res.status(500).json(
        {
          success:false,
          message:error.message,
        }
      )
   }
}

const getTasks=async(req,res)=>{
    try{

      const tasks=await Task.find();  //return an array

      return res.status(200).json({
        success:true,
        message:"Task fetched successfully",
        data:tasks
      })

    }
    catch(error)
    {
      console.log(error.message);
      return res.status(500).json({
        success:false,
        message:error.message
      })
    }
}

const getTaskByID=async(req,res)=>{
   try{
      const id=req.params.id;

      const task=await Task.findById(id);
      return res.status(200).json({
        success:true,
        message:"Task found successfully",
        data:task
      })
   }
   catch(error)
   {
      return res.status(500).json({
        success:false,
        message:error.message
      })
   }
}

const updateTask=async(req,res)=>{
  try{
      
     const id=req.params.id;
     
    const updates={};

    for(const field of ["title","status","priority","dueDate"])
    {
       if(req.body[field]!==undefined)
       {
         updates[field]=req.body[field];
       }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update"
      });
    }

     const task=await Task.findByIdAndUpdate(
      id,
      updates,
      {
        new:true,
        runValidators:true
      }
     )

     return res.status(200).json({
      success:true,
      message:"Task Updated Successfully",
      data:task
     })

  }
  catch(error)
  {
    return res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

const deleteTask=async(req,res)=>{ 
  try{
     const {id}=req.params;
     
     const task=await Task.findByIdAndDelete(id);

     if(!task)
     {
       return res.status(404).json({
        success:false,
        message:"Task Not Found"
      }
       )
     }

     return res.status(200).json({
      success:true,
      message:"Task Deleted"
     })

  }
  catch(error){
      return res.status(500).json({
        success:false,
        message:error.message
      })
  }
}

export {getTasks,
  createTask,
  getTaskByID,
  updateTask,
  deleteTask
}