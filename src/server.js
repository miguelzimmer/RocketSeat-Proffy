
//servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./page')

// configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//receber dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar aruqivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplição
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

