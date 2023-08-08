//logging configuration using pino

import pino from 'pino';
import { config } from './config';


export const logger = pino({
    level: config.logger.level,
    base: null,
    timestamp: true,
});
