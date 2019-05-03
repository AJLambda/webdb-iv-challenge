exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "bun" },
        { name: "weiner" },
        { name: "ketchup" },
        { name: "patty" },
        { name: "tomato" },
        { name: "lettuce" },
        { name: "onion" },
        { name: "corn" },
        { name: "butter" },
        { name: "cheddar" },
        { name: "chicken" },
        { name: "bread crumbs" },
        { name: "ground beef" },
        { name: "corn tortilla" },
        { name: "sour cream" },
        { name: "chili powder" },
        { name: "bell pepper" },
        { name: "pork" },
        { name: "garlic" },
        { name: "herbs" },
        { name: "flour" },
        { name: "bread" },
        { name: "vegetable oil" },
        { name: "fries" },
        { name: "gravy" },
        { name: "pepper" },
        { name: "sugar" },
        { name: "syrup" },
        { name: "egg" },
        { name: "bacon" },
        { name: "peppercorns" },
        { name: "mustard seeds" },
        { name: "potatoes" },
        { name: "carrots" },
        { name: "celery" },
        { name: "beef broth" },
        { name: "sauce" },
        { name: "canola oil" },
        { name: "peeled apples" },
        { name: "raisins" },
        { name: "vanilla" },
        { name: "cinnamon" },
        { name: "milk" }
      ]);
    });
};
