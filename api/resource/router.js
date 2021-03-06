const express = require("express")
const Resource = require("./model")
const { validateRequired } = require('../middleware/index')

const router = express.Router()

router.get("/api/resources", async (req, res, next) => {
	try {
		const resourcesFromDB = await Resource.getResources()
		res.json(resourcesFromDB)
	} catch(err) {
		next(err)
	}
})

router.post('/api/resources', validateRequired, (req, res, next) => {
   Resource.insertResource(req.body)
      .then((data) => {
         res.status(201).json(data)
      })
      .catch((error) => {
         next(error)
      })
});

module.exports = router