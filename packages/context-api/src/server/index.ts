import { storage } from '../api/node';
import { BROWSER_KEY } from '../api/browser';
import { ImmutableContext } from '../types';

export const expose = (to: () => void, context: ImmutableContext) => {
    storage.run(context, to);
};

export const markup = () => `
<script> window["${BROWSER_KEY}"] = ${JSON.stringify(storage.getStore())} </script>
`;
