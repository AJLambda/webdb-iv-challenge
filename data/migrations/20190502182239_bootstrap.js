// implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      // each table needs a primary key
      // we'll call it id, integer, auto-increment
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.timestamps(true, true); // create_at and updated_at
    })
    .createTable("recipes", tbl => {
      // the tracks table must be created before this table is created
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      // the students and cohorts tables must be created before this table is created
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

// undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
