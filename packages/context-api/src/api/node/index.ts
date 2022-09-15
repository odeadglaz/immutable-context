import { AsyncLocalStorage }  from 'async_hooks';
import { ImmutableData } from '../../types';

export let storage = new AsyncLocalStorage<ImmutableData>();

export const getImmutableData = () => {
    const context = storage.getStore();

    if (!context) {
        throw new Error('ImmutableData does not exists, ensure to call `expose` before accessing it.');
    }

    return context;
};
