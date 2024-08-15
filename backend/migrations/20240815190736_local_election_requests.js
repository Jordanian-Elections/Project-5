exports.up = function(knex) {
    return knex.schema.createTable('local_election_requests', function(table) {
      table.increments('id').primary();
      table.string('national_id', 10).notNullable();
      table.foreign('national_id').references('users.national_id');
      table.string('local_list_name').notNullable();
      table.json('members').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('local_election_requests');
  };