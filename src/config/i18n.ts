// i18n configuration

import i18n from 'i18n';
import { config } from './config';

export const createI18n = () => {
    i18n.configure({
        locales: config.i18n.locales,
        //directory: config.i18n.directory,
        defaultLocale: config.i18n.defaultLocale,
        objectNotation: config.i18n.objectNotation,
    });
    
    
    return i18n.init;
}


