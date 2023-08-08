import { NextFunction, Request, Response } from "express";
import { generateSalt, hashPassword } from "../lib/password";
import { LoginRequest, RegisterRequest } from "../model/schema";
import { dbFindUserByEmail, insertUser } from "../services/users";

export const register = async (req: Request, res: Response) => {
  try {
    const obj = RegisterRequest.safeParse(req.body);

    if (!obj.success) {
      //TODO if username or password is missing, return 401
      return res.status(400).json({
        success: false,
        message: obj.error.message,
      });
    }

    const { email, password, username } = obj.data;

    const existingUser = await dbFindUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    const salt = generateSalt();
    const hashedPassword = hashPassword(password, salt);

    const user = await insertUser({
      email,
      hashedPassword,
      salt,
      username,
    });

    return res.json({
      success: true,
      message: "User created",
      data: {
        userId: user[0].insertId,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not register user",
    });
  }
};

export const loginPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const obj = LoginRequest.safeParse(req.body);

    if (!obj.success) {
      return res.status(400).json({
        success: false,
        message: obj.error.message,
      });
    }

    const { email, password } = obj.data;

    const user = await dbFindUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const hashedPassword = hashPassword(password, user.salt);

    if (hashedPassword !== user.hashedPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Could not login user",
        });
      }
      // store user information in session, typically a user id
    req.session.user = user;

    // save the session before redirection to ensure page
    // load does not happen before session is saved
    req.session.save(function (err) {
      if (err) return next(err)
      res.redirect('/')
    })
    })

   // const token = await generateToken(user);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not login user",
    });
  }
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Could not logout user",
      });
    }

    return res.json({
      success: true,
      message: "User logged out",
    });
  });
}