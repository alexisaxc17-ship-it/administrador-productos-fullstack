import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"

dotenv.config()

const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  models: [__dirname + "/../models/**/*"],
  logging: false
})

export default db