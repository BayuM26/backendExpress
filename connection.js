const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const db = mysql.createConnection({
    host:process.env.EXPRESS_DB_HOST,
    user:process.env.EXPRESS_DB_USER,
    password:process.env.EXPRESS_DB_PASSWORD,
    database:process.env.EXPRESS_DB_NAME,
})

module.exports = db