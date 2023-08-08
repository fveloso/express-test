import { pbkdf2Sync } from "node:crypto";
import crypto from "node:crypto";
import { User } from '../model/schema';

export const hashPassword = (password: string, salt: string) => {
  return pbkdf2Sync(password, salt, 310000, 32, "sha512").toString("hex");
};

export const generateSalt = () => {
  return crypto.randomBytes(16).toString("hex");
};

export const validatePassword = (user: User, password: string) => {
    const userHashedPassword = hashPassword(password, user.salt);

    return userHashedPassword === user.hashedPassword;
};
    