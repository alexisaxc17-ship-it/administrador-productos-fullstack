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
  dialectOptions: process.env.DB_SSL === "true"
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    : {},
  models: [__dirname + "/../models/**/*"],
  logging: false
})

export default db