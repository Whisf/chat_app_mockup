import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env')})

const dbConfigs = {
    database: process.env.DB_NAME,
    user_name: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_URL,
    port: process.env.DB_PORT
}

const db = new Sequelize('postgres://postgres:156327@localhost:5432/chatdb', {
  host: 'localhost',
  dialect: 'postgres',
  // port: dbConfigs.port,
  // dialectOptions: {
  //   ssl: false
  // },
});

db.authenticate().then(() => {
  console.log('Connected')
}).catch((err) => {
  console.log(`connect failed ${err}`)
})

export default db;
