exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{ task_description: "Paint the Barn", 
        task_notes: "Start with the Barn",
        task_completed: true,
        project_id: 1
      },
      { task_description: "Paint the Basement", 
        task_notes: "Start with the Basement",
        task_completed: true,
        project_id: 1
      },
      { task_description: "Paint the Shed", 
        task_notes: "Don't forget to paint the shed",
        task_completed: true,
        project_id: 1
      },
      { task_description: "Make a chair out of wood", 
        task_notes: "",
        task_completed: false,
        project_id: 2
      }, 
      { task_description: "Fix the Barn Roof", 
        task_notes: "Paint is wet",
        task_completed: false,
        project_id: 2
      },
      { task_description: "Create something else out of wood", 
        task_notes: "Don't cut yourself again",
        task_completed: false,
        project_id: 2
      },
      { task_description: "Tear down the barn", 
        task_notes: "Start with the Barn",
        task_completed: false,
        project_id: 3
      },
      { task_description: "Build a new barn", 
        task_notes: "don't forget to tear it down first",
        task_completed: false,
        project_id: 3
      }, 
      { task_description: "Put a window in the shed", 
        task_notes: "Watch out for the rooster",
        task_completed: true,
        project_id: 3
      },
      { task_description: "Duct tape the wall, over the hole", 
        task_notes: "also paint the duct tape",
        task_completed: false,
        project_id: 3
      },
      { task_description: "Hang Pictures in all rooms", 
        task_notes: "Start with the Barn",
        task_completed: true,
        project_id: 4
      },
      { task_description: "Leave the Shire", 
        task_notes: "Quickly",
        task_completed: true,
        project_id: 5
      }, 
      { task_description: "Avoid the Ring Wraiths", 
        task_notes: "yikes",
        task_completed: true,
        project_id: 5
      },
      { task_description: "Trick Smeagel-Gollum", 
        task_notes: "potatoes",
        task_completed: true,
        project_id: 5
      },
      { task_description: "Sneak into Mordor", 
        task_notes: "last movie",
        task_completed: true,
        project_id: 5
      },
      { task_description: "Ring into the lava", 
        task_notes: "",
        task_completed: false,
        project_id: 5
      }, 
	])
}