const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const db = require("./models")



dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    db.sequelize.sync({ alter: true })
    console.log("listening to PORT", PORT) 
})