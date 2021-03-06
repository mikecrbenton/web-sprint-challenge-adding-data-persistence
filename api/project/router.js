const express = require("express")
const Projects = require("./model")
//const { checkRecipeId } = require('../middleware/index')

const router = express.Router()

router.get("/api/resources", async (req, res, next) => {
	try {
		res.json("working")
	} catch(err) {
		next(err)
	}
})



module.exports = router