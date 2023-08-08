import { mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";
import { InferModel } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 30 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  hashedPassword: text("hashed_password").notNull(),
  salt: text("salt").notNull(),
});

export type User = InferModel<typeof users>;

const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email.email(),
});

const requestSchema = insertUserSchema.pick({ username: true, email: true });

export const RegisterRequest = requestSchema.extend({
  password: z.string().min(8).max(100),
  passwordConfirmation: z.string().min(8).max(100),
});

export const LoginRequest = insertUserSchema.pick({ email: true}).extend({
  password: z.string().min(8).max(100),
});