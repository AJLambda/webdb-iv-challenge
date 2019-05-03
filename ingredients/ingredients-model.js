// db is a configured instance of knex that knows how to talk to the database
const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("ingredients");
}

function findById(id) {
  return db("ingredients")
    .where({ id })
    .first();
}

function add(ingredient) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("ingredients")
    .insert(ingredient, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db("ingredients")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("ingredients")
    .where({ id })
    .del();
}
