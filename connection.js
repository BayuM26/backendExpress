const mongose =  require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL

const db = async() => {
  try {
    const con = await mongose.connect(MONGO_DB_URL)
    console.log(`mongodb connected: ${con.connection.host}`);
  } catch (error) {
    console.log( error );
  }
}

module.exports = db