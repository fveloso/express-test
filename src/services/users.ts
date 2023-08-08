import { InferModel, eq } from "drizzle-orm";
import { User, users } from "../model/schema";
import { db } from "../database/db";

export const dbFindUser = async (
  username: string
): Promise<User | undefined> => {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  return user;
};

export const dbFindUserById = async (
    id: number
  ): Promise<User | undefined> => {
    const user = await db.query.users.findFirst({
      where: eq(users.id, id),
    });
  
    return user;
  };

type NewUser = InferModel<typeof users, "insert">;

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user);
};


export const dbFindUserByEmail = async (
    email: string
  ): Promise<User | undefined> => {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
  
    return user;
  };