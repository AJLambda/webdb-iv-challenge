exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "HotDog", dish_id: 1 },
        { name: "Burger", dish_id: 1 },
        { name: "Grits", dish_id: 1 },
        { name: "Fried chicken", dish_id: 1 },
        { name: "Burrito", dish_id: 2 },
        { name: "Enchilada", dish_id: 2 },
        { name: "Chorizo", dish_id: 2 },
        { name: "Carnitas", dish_id: 2 },
        { name: "Bannock", dish_id: 3 },
        { name: "Poutine", dish_id: 3 },
        { name: "Butter tarts", dish_id: 3 },
        { name: "Peameal bacon", dish_id: 3 },
        { name: "Stew", dish_id: 4 },
        { name: "Shephards pie", dish_id: 4 },
        { name: "Apple strudel", dish_id: 4 },
        { name: "French toast", dish_id: 4 }
      ]);
    });
};
