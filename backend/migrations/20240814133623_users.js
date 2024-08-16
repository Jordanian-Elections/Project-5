exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id"); // Primary key
    table.integer("national_id").notNullable().unique().primary(); // National ID as primary key (INTEGER)
    table.string("email").notNullable().unique(); // Email field, must be unique
    table.string("name").notNullable(); // Name field
    table.string("city").notNullable(); // City field
    table.string("circle");
    table.boolean("isVotedcircle").defaultTo(false); // Boolean to check if the user has voted in the circle
    table.boolean("isVotedparty").defaultTo(false); // Boolean to check if the user has voted in the party
    table.string("password").notNullable(); // Password field
    table.enu("role", ["voter", "candidate"]).notNullable(); // Enum for role
    table.boolean("isApproved").defaultTo(false); // Boolean for admin approval
    table.integer("Whitepaper").nullable(); // Integer field for Whitepaper
    table.enu("type", ["مسلم", "كوتا", "مسيحي", "شيشاني"]); // نوع الترشيح
    table.enu("gender", ["male", "female"]); // نوع الجنس
    table.boolean("isActivate").defaultTo(true); // Boolean for admin approval
    table.string("otp").nullable(); // OTP field

    // table.integer('electoral_district_id') // Foreign key
    // .unsigned()
    // .references('id')
    // .inTable('electoral_districts')
    // .onDelete('CASCADE'); // Delete user if electoral district is deleted

    // Add timestamps
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

// // migration file: 20240813084300_create_users_table.js

// exports.up = function(knex) {
//     return knex.schema.createTable('users', function(table) {
//       table.increments('id').primary(); // Primary key
//       table.string('national_id').notNullable().unique(); // National ID, unique
//       table.string('name').notNullable(); // Name field
//       table.string('email').notNullable().unique(); // Email field, unique
//       table.string('password').notNullable(); // Password field
//       table.string('otp').nullable(); // OTP field
//       table.integer('electoral_district_id') // Foreign key
//            .unsigned()
//            .references('id')
//            .inTable('electoral_districts')
//            .onDelete('CASCADE'); // Delete user if electoral district is deleted

//       // Add timestamps
//       table.timestamps(true, true);
//     });
//   };

//   exports.down = function(knex) {
//     return knex.schema.dropTable('users');
//   };
