const db = require("../../data/dbConfig")

// HELPER FUNCTION FOR insertProject()
function getProjectById(id) {
   return db("projects")
     .where("project_id",id)
     .first();
 }

function getProjects(){
   return db("projects")
}

function insertProject(newProject) {
   return db('projects').insert(newProject)
     .then( (returnedProject) => {
       return getProjectById(returnedProject[0]);
     });
 }


module.exports = {
   getProjects,
   insertProject
}