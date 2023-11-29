const db = require('../data-source')
const userModel = require('../models/UserModel')
const UserEntity = require('../entity/User')
module.exports = class UserController {
    async save({ nome, email, senha }) {
        const user = new userModel(nome, email, senha);
        const userTable = db.getRepository(UserEntity)
        return await userTable.save(user);
    }

    async findUser(email) {
        const findUser = await db.manager.find(UserEntity, { where: { email: email } });
        if (findUser.length === 0) {
            return false
        } else {
            return findUser
        }
    }

    async findID(id) {
        const findid = await db.manager.find(UserEntity, { where: { id: id } });
        if (findid.length === 0) {
            return false
        } else {
            return findid
        }
    }

    async verifEmail(email) {
        const verifEmail = await db.manager.find(UserEntity, { where: { email: email } });

        if (verifEmail.length === 0) {
            return true
        } else {
            return false
        }
    }
}