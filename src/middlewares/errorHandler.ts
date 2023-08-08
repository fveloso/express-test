//error handler middleware

import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err); //TODO: remove this line
    logger.error(err.message);

    res.status(500).json({
        success: false,
        message: err.message,
    });
}