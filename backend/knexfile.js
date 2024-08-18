module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "123456",
      database: "Elections",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "WwEeRr1234567",
      database: "db7",
    },
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
