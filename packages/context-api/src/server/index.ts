import { storage, getImmutableData } from '../api/node/__index';
import { BROWSER_KEY } from '../api/browser';
import { ImmutableData } from '../types';

export const expose = (context: ImmutableData, to: () => void) => (
    storage.run(context, to)
);

export const markup = () => `
<script> window["${BROWSER_KEY}"] = ${JSON.stringify(storage.getStore())} </script>
`;

export {
    getImmutableData
};
