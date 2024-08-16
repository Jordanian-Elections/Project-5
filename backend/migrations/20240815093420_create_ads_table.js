exports.up = function(knex) {
    return knex.schema.createTable('ads', table => {
      table.increments('id').primary();
      table.string('candidate_name').notNullable();
      table.text('image_url').notNullable();  
      table.text('description').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ads');
  };
  