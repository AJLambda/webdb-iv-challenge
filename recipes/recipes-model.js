// db is a configured instance of knex that knows how to talk to the database
const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
  //   update,
  //   remove
};

// should return a list of all recipes in the database including the dish they belong to.
function getRecipes() {
  return db("recipes");
}

// The recipe should include:
// name of the dish.
// name of the recipe.
// the list of ingredients with the quantity.
function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

// should add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("recipes")
    .insert(recipe, "id")
    .then(([id]) => {
      return getRecipe(id);
    });
}

// function update(id, changes) {
//   return db("recipes")
//     .where({ id })
//     .update(changes)
//     .then(count => {
//       if (count > 0) {
//         return findById(id);
//       } else {
//         return null;
//       }
//     });
// }

// function remove(id) {
//   return db("recipes")
//     .where({ id })
//     .del();
// }
