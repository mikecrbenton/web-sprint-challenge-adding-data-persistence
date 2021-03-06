const db = require("../../data/dbConfig")

// HELPER FUNCTION FOR insertResource()
function getResourceById(id) {
   return db("resource")
     .where("resource_id",id)
     .first();
 }

function getResources(){
   return db("resource")
}

function insertResource(newResource) {
   return db('resource').insert(newResource)
     .then( (returnedResources) => {
       return getResourceById(returnedResources[0]);
     });
 }

module.exports = {
   getResources,
   insertResource
}