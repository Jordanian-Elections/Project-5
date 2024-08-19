module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",

      password: "Abed@0782744028",
      database: "FinalElection",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",

      password: "Abed@0782744028",
      database: "FinalElection",
    },
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
