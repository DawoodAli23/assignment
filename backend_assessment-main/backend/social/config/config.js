module.exports = {
    development: {
        username: process.env.POSTGRES_USERNAME || "psotgres",
        password: process.env.POSTGRES_PASSWORD || "password",
        database: process.env.POSTGRES_DATABASE || "social",
        host: "postgres",
        dialect: "postgres",
    },
};
