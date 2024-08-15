
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Abed@0782744028',
      database: 'Election'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Abed@0782744028',
      database: 'Election'
    }
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};