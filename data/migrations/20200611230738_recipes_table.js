
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('name',128).notNullable().index()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable().index()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments()

        //foreign key
        tbl.integer('recipes_id')
            .notNullable()
            .unsigned()
            .references('recipes.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
    .createTable('ingrediant_details', tbl => {
        tbl.increments()
        tbl.float('quantity')
            .unsigned()
            .notNullable()

        //foreign keys
        tbl.integer("recipe_ingredient_id")
            .unsigned()
            .references("recipe_ingredients.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")

        tbl.integer('ingrediant_id')
            .unsigned()
            .references("ingredients.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
    .createTable("instructions", tbl => {
        tbl.increments()
        tbl.string("step", 400).notNullable()
        tbl.integer("step_number").unsigned().notNullable()

        //foreign key 
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingrediant_details")
    .dropTableIfExists("instructions")
};
