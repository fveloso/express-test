

export const config = {
    server: {
        port: process.env.PORT || 3000,
    },
    logger: {
        level: process.env.LOG_LEVEL || 'info',
        prettyPrint: process.env.NODE_ENV !== 'production',
    },
    database: {
        hostname: process.env.DB_HOSTNAME,
        port: parseInt(process.env.DB_PORT!),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    i18n: {
        locales: ['en'],
        directory: `~/locales`,
        defaultLocale: 'en',
        objectNotation: true,
    },
};


