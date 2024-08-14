exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('national_id').notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('otp').nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  