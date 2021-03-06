const db = require("../../data/dbConfig")

const validateRequired = (req, res, next) => {

   let checkRequired;

   if(req.body.project_name){
      checkRequired = req.body.project_name
   }
   if(req.body.resource_name){
      checkRequired = req.body.resource_name
   }
   if(req.body.task_description){   
      checkRequired = req.body.task_description
   }


   if(!checkRequired || checkRequired === "" || typeof(checkRequired) !== "string" ){
      return res.status(400).json({message: "You are missing a required field" })
   }

   next()
}

module.exports = { validateRequired }

