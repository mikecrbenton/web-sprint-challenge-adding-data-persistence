exports.seed = async function(knex) {
	await knex("resource").insert([   
		{ resource_name: "Hammer", 
        resource_description: "You are full of surprises, Master Baggins."
      },
      { resource_name: "Duct Tape", 
        resource_description: "Rohan's two brooded shadow prove birdses broil normal authority"
      },
      { resource_name: "Level", 
        resource_description: "Off marshes Oakenshield soon stench whilst goes visiting welcome borders vines chiefest."
      },
      { resource_name: "Paint", 
        resource_description: "Served quickened Frodo Baggins 111th vulnerable out-of-pocket"
      },
      { resource_name: "Screwdriver", 
        resource_description: "It's some form of Elvish. I can't read it."
      },
      { resource_name: "Bucket", 
        resource_description: "Consider Hobbitses handle crunchable."
      },
      { resource_name: "Measuring Tape", 
        resource_description: "Fly, you fools!"
      },
      { resource_name: "Mithril", 
        resource_description: "Taught wonderful foundations crawled gardener shadows fond Ring"
      },
    
	])
}