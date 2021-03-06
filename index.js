const express = require("express")
const projectsRouter = require("./api/project/router")
const resourceRouter = require("./api/resource/router")
const taskRouter = require("./api/task/router")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use(projectsRouter)
server.use(resourceRouter)
server.use(taskRouter)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "This is an error passed down by next()",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})// start your server here
