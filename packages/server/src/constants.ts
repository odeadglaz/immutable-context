import path from 'path';

export const paths = {
    staticAssets: path.resolve(process.cwd(), '..', 'main-app', 'dist', 'client', 'assets'),
    template: path.resolve('../main-app/dist/client/index.html'),
    ssrBundle: '../../main-app/dist/server/App.js'
};
