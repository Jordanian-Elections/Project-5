exports.up = function (knex) {
  return knex.schema.createTable("contact_request", function (table) {
    table.increments("id").primary();
    table
      .integer("contact_national_id", 20)
      .references("national_id")
      .inTable("users");
    table.string("phone", 20); // Changed from integer to string
    table.string("subject", 200);
    table.text("message");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contact_request");
};
