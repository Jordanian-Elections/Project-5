
module.exports = {
  development: {
    client: 'pg', 
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'Abed@0782744028',
      database: 'Election'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
};
