import fs from 'fs';
import open from 'open';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import uaParser from 'ua-parser-js';
import * as immutableContextAPI from '@immutable/api/server';
import { paths } from './constants.js';

const createImmutableContext = (req: express.Request) => {
    const url = req.originalUrl;
    const userAgent = uaParser(req.headers['user-agent']);
    const isTouch = ['tablet', 'mobile'].some((type) => userAgent.device?.type === type);

    return {
        url,
        userAgent,
        isTouch,
        uid: Date.now().toString(),
        country: 'ISR'
    }
}

const createStore = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    immutableContextAPI.expose(createImmutableContext(req), next);
}

const renderHandler = async (req: express.Request, res: express.Response) => {
    const serverApp = (await import(paths.ssrBundle)).default;
    const clientTemplate = fs.readFileSync(paths.template, 'utf-8')

    const appMarkup = ReactDOM.renderToString(
        React.createElement(serverApp, {})
    );

    const document = clientTemplate
        .replace('<!--ssr-outlet-->', appMarkup)
        .replace('<!--scripts-outlet-->', immutableContextAPI.markup());

    res.set('Content-Type', 'text/html').end(document);
};

const registerApp = () => {
    const app = express();

    app.set('port', 1337);

    const router = express.Router();

    router.get('/page', createStore, renderHandler);

    app.use('/assets', express.static(paths.staticAssets));
    app.use(router);

    app.listen(app.get('port'), () => {
        console.log('info', `Server listening on port ${app.get('port')}...`)
        open(`http://localhost:${app.get('port')}/page`);
    });
};

registerApp();
