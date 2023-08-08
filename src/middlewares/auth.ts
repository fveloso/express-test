// //authentication middleware
 import { Request, Response, NextFunction } from 'express';
// import passport from 'passport';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
    }
}




// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     passport.authenticate('jwt', { session: false }, (err, user, info) => {
//         if (err) return next(err);

//         if (!user) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Unauthorized',
//             });
//         }

//         req.user = user;
//         next();
//     })(req, res, next);
// }