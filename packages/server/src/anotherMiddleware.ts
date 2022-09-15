import express from 'express';
import * as API from '@immutable/api/server';

export const anotherMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Middleware access:', API.getImmutableContext().isTouch);
    next();
};
