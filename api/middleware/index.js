

  projectsFromDB.forEach( (item) => {
   if(item.project_completed === 0){
      item.project_completed = false;
   }
   if(item.project_completed === 1){
      item.project_completed = true;
   }
})

function convertIntToBool (databaseObject) {

   databaseObject.forEach( (item) => {
      if(item.project_completed === 0){
         item.project_completed = false;
      }
      if(item.project_completed === 1){
         item.project_completed = true;
      }
   })

}

module.exports = { convertIntToBool }

