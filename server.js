process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const express = require("express")
const handlebars = require("express-handlebars")
const path = require("path")

const app = express()

app.use(express.urlencoded({ extended: true }))

app.engine(
    ".hbs",
    handlebars.engine({ extname: ".hbs" })
)

app.set(
    "view engine", ".hbs"
)

app.listen(
    5192,
    function () {
        console.log("Listening on port: 5192.")
    }
)

app.use(
    express.static(
        path.join(__dirname, "public")
    )
)
