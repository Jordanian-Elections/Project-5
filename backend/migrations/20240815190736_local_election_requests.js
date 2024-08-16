exports.up = function (knex) {
  return knex.schema.createTable("local_election_requests", function (table) {
    table.increments("id").primary();
    table.integer("national_id").unsigned().notNullable(); // Changed to integer to match the users table
    table.foreign("national_id").references("national_id").inTable("users"); // Foreign key referencing users.national_id
    table.string("local_list_name").notNullable();
    table.json("members").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("local_election_requests");
};
