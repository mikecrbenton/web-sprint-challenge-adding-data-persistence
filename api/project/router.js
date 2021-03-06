const express = require("express")
const Projects = require("./model")
//const { checkRecipeId } = require('../middleware/index')

const router = express.Router()


router.get("/api/projects", async (req, res, next) => {
	try {
		const projectsFromDB = await Projects.getProjects()

      projectsFromDB.forEach( (item) => {
         if(item.project_completed === 0){
            item.project_completed = false;
         }
         if(item.project_completed === 1){
            item.project_completed = true;
         }
      })
		res.json(projectsFromDB)
	} catch(err) {
		next(err)
	}
})

router.post('/api/projects', (req, res, next) => {
   Projects.insertProject(req.body)
      .then((data) => {
         if(data.project_completed === 0){
            data.project_completed = false;
         }
         if(data.project_completed === 1){
            data.project_completed = true;
         }
         res.status(201).json(data)
      })
      .catch((error) => {
         next(error)
      })
});




module.exports = router