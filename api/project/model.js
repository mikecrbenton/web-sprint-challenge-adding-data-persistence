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

// STRETCH GOAL 1 OF 3
function getProjectResources(project_id) {
   return db("project_resources as PR") // IN MANY-TO-MANY - JOIN TABLE AS THE MAIN TABLE
      .select(["P.project_name","R.*"])
      .innerJoin("projects as P", "P.project_id", "PR.project_id") 
      .innerJoin("resources as R", "R.resource_id", "PR.resource_id") 
      .where("P.project_id", project_id) // dynamic aspect ( user input )
}

function insertProject(newProject) {
   return db('projects').insert(newProject)
     .then( (returnedProject) => {
       return getProjectById(returnedProject[0]);
     });
 }

module.exports = {
   getProjects,
   insertProject,
   getProjectResources
}