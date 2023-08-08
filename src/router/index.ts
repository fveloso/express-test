import express from 'express';
import authentication from './authentication';
import user from './user';

export const router = express.Router();

router.use('/auth', authentication);
router.use('/', user);



