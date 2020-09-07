const express = require('express')
const server = express()

const { pageLanding, 
    pageStudy, 
    pageGiveClasses,
    saveClasses 
} = require('./pages')



const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})



server
//Receber os dados do req.body que vem do pages.js
.use(express.urlencoded({ extended: true }))

.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)