exports.up = function (knex) {
  return knex.schema
    .createTable("local_election_requests", function (table) {
      table.increments("id").primary();
      table.integer("national_id").unsigned().notNullable();
      table.foreign("national_id").references("national_id").inTable("users"); // Foreign key referencing users.national_id
      table.string("local_list_name").notNullable();
      table.timestamps(true, true);
    })
    .then(function () {
      return knex.schema.createTable("members", function (table) {
        table.increments("id").primary();
        table.integer("request_id").unsigned().notNullable(); // Foreign key linking to local_election_requests
        table
          .foreign("request_id")
          .references("id")
          .inTable("local_election_requests")
          .onDelete("CASCADE");
        table.string("member_name").notNullable();
        table.timestamps(true, true);
      });
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("members").then(function () {
    return knex.schema.dropTable("local_election_requests");
  });
};
