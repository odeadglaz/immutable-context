import express from 'express';
import * as immutableContextAPI from '@immutable/api/server';

export const anotherMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Middleware access:', immutableContextAPI.getImmutableContext());
    next();
};
