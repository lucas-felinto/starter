const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.use(express.static("public"))

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req,res) => {
    return res.render("index.html")
})

server.get("/create_point", (req,res) => {
    return res.render("create_point.html")
})

server.listen(3000)