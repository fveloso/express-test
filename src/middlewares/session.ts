import * as session from 'express-session';
import MySQLStore from 'express-mysql-session';
import { config } from '../config/config';
import { User } from '../model/schema';

const SessionStore = MySQLStore(session );

export const sessionMiddleware = session.default({
    secret: process.env.SESSION_SECRET! || 'my-mdf-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: new SessionStore({
        host: config.database.hostname,
        port: config.database.port,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database,
    }),
});

declare module "express-session" {
    interface SessionData {
      user?: User;
    }
  }
  