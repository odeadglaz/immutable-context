import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import * as immutableContextAPI from '@immutable/api/server';

const immutableContextStub = {
    url: 'https://www.google.com',
    userAgent: 'UserAgent',
    country: 'ISR',
    uid: 'uid'
};

const renderHandler = async (req, res) => {
    const serverApp = (await import('../../main-app/dist/server/App.js')).default;
    const clientTemplate = fs.readFileSync(path.resolve('../main-app/dist/client/index.html'), 'utf-8')

    immutableContextAPI.expose(() => {
        const appMarkup = ReactDOM.renderToString(
            React.createElement(serverApp, {})
        );

        const document = clientTemplate
            .replace('<!--ssr-outlet-->', appMarkup)
            .replace('<!--scripts-outlet-->', immutableContextAPI.markup());

        res.set('Content-Type', 'text/html').end(document);

    }, immutableContextStub);
};

const app = express();

app.set('port', 1337);

const router = express.Router();
router.get('/page', renderHandler);

const staticPath = path.resolve(process.cwd(), '..', 'main-app', 'dist', 'client', 'assets');
console.log('stat', staticPath);
app.use('/assets', express.static(staticPath));
app.use(router);

app.listen(app.get('port'), () => {
    console.log('info', `Server listening on port ${app.get('port')}...`)
});
