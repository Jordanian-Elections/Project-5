// const dotenv = require('dotenv');
// const { development } = require('./knexfile.js');
// const environment = process.env.NODE_ENV || development ;
// const config = require('./knexfile.js')[environment];
// const knex = require('knex')(config);

// module.exports = knex;


/////////////////////////////////

const dotenv = require('dotenv');
dotenv.config();

const { development } = require('./knexfile.js');
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);

module.exports = knex;


