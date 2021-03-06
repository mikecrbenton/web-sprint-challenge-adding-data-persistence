exports.seed = async function(knex) {
   await knex("tasks").truncate()
	await knex("project_resources").truncate()
	await knex("resource").truncate()
	await knex("projects").truncate()
}
