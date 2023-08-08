//audit middleware

import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

export const auditMiddleware = (req: Request, res: Response, next: NextFunction) => {
    logger.info(`${req.method} ${req.path}`);
    next();
}