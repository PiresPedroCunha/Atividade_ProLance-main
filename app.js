const express = require('express')
const app = new express()
const pages = require('./routes/pages')//rotas das paginas
// const db = require('./routes/db-config')
const createConnectionDB = require("./routes/db-config")
const cookie = require('cookie-parser')


app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookie())
app.use(express.json());




createConnectionDB()
// //conecção BD
// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected Database!!')

// })



app.use('/', pages) //rotas get
app.use('/api/', require('./controllers/auth')) //rotas de autenticação
module.exports = app;
