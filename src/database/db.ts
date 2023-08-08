import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { config } from "../config/config";
import * as schema from "../model/schema";



const connection = await mysql.createConnection({
  host: config.database.hostname,
  port: config.database.port,
  user: config.database.user,
  database: config.database.database,
  password: config.database.password,
});

export const db = drizzle(connection, { schema, mode: "default" });
