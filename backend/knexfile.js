module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123456",
      database: "Elections2",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123456",
      database: "Elections2",
    },
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
