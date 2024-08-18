// exports.up = function(knex) {
//     return knex.schema.createTable('debates', function(table) {
//       table.increments('id').primary();
//       table.string('name').notNullable();
//       table.dateTime('start_time').notNullable();
//       table.dateTime('end_time').notNullable();
//       table.integer('candidate1_id').unsigned().references('national_id').inTable('users');
//       table.integer('candidate2_id').unsigned().references('national_id').inTable('users');
//       table.boolean('isApproved').defaultTo(false); // Add isApproved column with default value false
//       table.timestamps(true, true);
//     });
//   };
  
//   exports.down = function(knex) {
//     return knex.schema.dropTable('debates');
//   };
  

////////////


exports.up = function(knex) {
    return knex.schema.createTable('debates', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.dateTime('start_time').notNullable();
      table.dateTime('end_time').notNullable();
      table.integer('candidate1_id').unsigned().references('national_id').inTable('users');
      table.integer('candidate2_id').unsigned().references('national_id').inTable('users');
      table.boolean('isApproved').defaultTo(false); // Add isApproved column with default value false
      table.string('code').unique(); // Add code column allowing NULL values and unique constraint
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('debates', function(table) {
      table.dropColumn('code');
    }).dropTableIfExists('debates'); // Ensure table is dropped if needed
  };
  
  