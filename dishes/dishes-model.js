// db is a configured instance of knex that knows how to talk to the database
const db = require("../data/dbConfig.js");

module.exports = {
  getDishes,
  getDish,
  addDish
  //   update,
  //   remove
};

// should return a list of all dishes in the database.
function getDishes() {
  return db("dishes");
}

// should return the dish with the provided id and include a list of the related recipes.
function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}

// should add the dish to the database and return the id of the new dish.
function addDish(dish) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("dishes")
    .insert(dish, "id")
    .then(([id]) => {
      return getDish(id);
    });
}

// function update(id, changes) {
//   return db("dishes")
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
//   return db("dishes")
//     .where({ id })
//     .del();
// }
