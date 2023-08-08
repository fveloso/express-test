import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/model/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: "localhost",
    port: 3306,
    database: process.env.MYSQL_DATABASE!,
    user: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
  },
} satisfies Config;
