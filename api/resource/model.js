const db = require("../../data/dbConfig")

// HELPER FUNCTION FOR insertResource()
function getResourceById(id) {
   return db("resources")
     .where("resource_id",id)
     .first();
 }

function getResources(){
   return db("resources")
}

function insertResource(newResource) {
   return db('resources').insert(newResource)
     .then( (returnedResources) => {
       return getResourceById(returnedResources[0]);
     });
 }

module.exports = {
   getResources,
   insertResource
}