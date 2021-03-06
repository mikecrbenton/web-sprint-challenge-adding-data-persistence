const express = require("express")
const Task = require("./model")
const { validateRequired } = require('../middleware/index')

const router = express.Router()


router.get("/api/tasks", async (req, res, next) => {
	try {
		const tasksFromDB = await Task.getTasks()

      tasksFromDB.forEach( (item) => {
         if(item.task_completed === 0){
            item.task_completed = false;
         }
         if(item.task_completed === 1){
            item.task_completed = true;
         }
      })
		res.json(tasksFromDB)
	} catch(err) {
		next(err)
	}
})

router.post('/api/tasks', validateRequired, (req, res, next) => {
   Task.insertTask(req.body)
      .then((data) => {
         if(data.task_completed === 0){
            data.task_completed = false;
         }
         if(data.task_completed === 1){
            data.task_completed = true;
         }
         res.status(201).json(data)
      })
      .catch((error) => {
         next(error)
      })
});

module.exports = router