exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "American dish" },
        { name: "Spanish dish" },
        { name: "Canadian dish" },
        { name: "European dish" },
        { name: "Asian dish" }
      ]);
    });
};
