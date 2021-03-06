const db = require("../../data/dbConfig")

// HELPER FUNCTION FOR insertResource()
function getTaskById(id) {
   return db("tasks")
     .where("task_id",id)
     .first();
 }

function getTasks(){
   return db("tasks")
}

function insertTask(newTask) {
   return db('tasks').insert(newTask)
     .then( (returnedTasks) => {
       return getTaskById(returnedTasks[0]);
     });
 }


module.exports = {
   getTasks,
   insertTask
}