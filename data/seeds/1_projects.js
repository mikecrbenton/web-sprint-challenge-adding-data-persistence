exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ project_name: "Painting", 
        project_description: "Gollum safety gloom maids burglar Láthspell",
        project_completed: true
      },
      { project_name: "Carpentry", 
        project_description: "I was there the day the strength of Men failed",
        project_completed: false
      },
      { project_name: "Remodeling", 
        project_description: "Speaking hills enchantment expenses support father's Rohan danger stare fox wring",
        project_completed: true
      },
      { project_name: "Hang Pictures", 
        project_description: "Legendary deeply risen whose pirate cross farriers although Sul!",
        project_completed: false
      },
      { project_name: "Fight Sauron", 
        project_description: "Metal Brandybucks summit slight tracked open required defense cast armoury",
        project_completed: false
      }
	])
}