const jwt = require('jsonwebtoken')
const UserController = require('./UserController')

const loggedIn = (req, res, next) => {
    if (!req.cookies.userRegistered) return next()
    try {
        const decoded = jwt.verify(req.cookies.userRegistered, 'avidaedificil')
        const user = new UserController().findID(decoded.id)
        req.user = user
        return next()
    } catch (err) {
        if (err) return next()
    }

}

module.exports = loggedIn