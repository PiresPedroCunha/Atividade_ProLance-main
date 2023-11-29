const { EntitySchema } = require('typeorm')


module.exports = new EntitySchema({
    name: "Job", // Will use table name `category` as default behaviour.
    tableName: 'jobs',
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        idUser: {
            type: "int",

        },
        titulo: {
            type: "varchar",
        },
        descricao: {
            type: "text"
        },
        data_publicacao: {
            type: "date"
        },



    },
    relations: {
        users: {
            target: "User",
            type: "many-to-one",
        },
    },
})