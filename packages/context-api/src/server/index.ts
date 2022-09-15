import { storage, getImmutableContext } from '../api/node';
import { BROWSER_KEY } from '../api/browser';
import { ImmutableContext } from '../types';

export const expose = (context: ImmutableContext, to: () => void) => (
    storage.run(context, to)
);

export const markup = () => `
<script> window["${BROWSER_KEY}"] = ${JSON.stringify(storage.getStore())} </script>
`;

export {
    getImmutableContext
};
