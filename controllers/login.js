const jwt = require('jsonwebtoken')
const UserController = require('./UserController')
const bcrypt = require("bcrypt")

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.json({ status: "error", error: "Por favor entre com seu email e senha" })
    else {
        const user = await new UserController().findUser(email)
        if (!user) return res.json({ status: "error", error: "Email ou senha incorretos" })
        let verifyPass;
        user.map(e => {
            verifyPass = e.senha
        })
        const passwordValid = bcrypt.compare(password, verifyPass)
        if (!passwordValid) return res.json({ status: "error", error: "Email ou senha incorretos" })
        const token = jwt.sign({ id: user[0].id }, 'avidaedificil', {
            expiresIn: '90d',
        })
        const cookieOptions = {
            expiresIn: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.cookie("userRegistered", token, cookieOptions)
        return res.json({ status: "success", success: "Usuário logado com sucesso" })
    }

}

module.exports = login;