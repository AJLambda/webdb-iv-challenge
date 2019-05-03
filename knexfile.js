// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/RecipeBook.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    useNullAsDefault: true, // needed for sqlite
    // gotcha: SQLite does not enforce FKs by default!!
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};
