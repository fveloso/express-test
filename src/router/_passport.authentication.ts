// import express, { Request } from "express";
// import passport from "passport";
// import LocalStrategy from "passport-local";
// import crypto from "crypto";
// import { dbFindUser, dbFindUserById, insertUser } from "~/services/users";
// import { register } from "~/controllers/authentication";

// const router = express.Router();

// passport.use(
//   new LocalStrategy.Strategy(async (username, password, done) => {
//     const user = await dbFindUser(username);

//     if (!user) {
//       return done(null, false, { message: "Incorrect username." });
//     }

//     if (!(await dbValidatePassword(user, password))) {
//       return done(null, false, { message: "Incorrect password." });
//     }

//     return done(null, user);
//   })
// );

// declare global {
//   namespace Express {
//     interface User {
//       username: string;
//       id?: number;
//     }
//   }
// }

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id: number, done) => {
//   const user = await dbFindUserById(id);
//   done(null, user);
// });

// const dbValidatePassword = (user: any, password: string) => {
//   return new Promise((resolve, reject) => {
//     const storedSalt = Buffer.from(user.salt, "hex");

//     crypto.pbkdf2(
//       password,
//       storedSalt,
//       310000,
//       32,
//       "sha512",
//       (err, derivedKey) => {
//         if (err) reject(err);
//         resolve(derivedKey.toString("hex") === user.passwordHash);
//       }
//     );
//   });
// };

// router.post(
//   "/login/password",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );

