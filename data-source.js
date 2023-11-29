require('reflect-metadata');
const { DataSource } = require('typeorm')
const User = require('./entity/User');
const Job = require('./entity/Job');
const AppDataSource = new DataSource({
    type: "mysql",
    host: "192.168.56.1",
    port: 3306,
    username: "rootPC1",
    password: "123",
    database: "atividade_test",
    synchronize: true,
    logging: false,
    entities: [User, Job],
    migrations: [],
    subscribers: [],
})

module.exports = AppDataSource;