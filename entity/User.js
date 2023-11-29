const { EntitySchema } = require('typeorm')


module.exports = new EntitySchema({
    name: "User", // Will use table name `category` as default behaviour.
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        email: {
            type: "varchar",
        },
        senha:
        {
            type: "varchar"
        },

    },
    relations: {
        jobs: {
            target: "Job",
            type: "one-to-many",
            cascade: true,
        },
    },
})