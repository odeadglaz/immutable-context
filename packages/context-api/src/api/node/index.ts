import { AsyncLocalStorage }  from 'async_hooks';
import { ImmutableContext } from '../../types';

const existingStore = global["__IMMUTABLE_CONTEXT_STORAGE"];

export const storage = existingStore as AsyncLocalStorage<ImmutableContext> || new AsyncLocalStorage<ImmutableContext>();

global["__IMMUTABLE_CONTEXT_STORAGE"] ||= storage;

export const getImmutableContext = () => {
    const context = storage.getStore();

    if (!context) {
        throw new Error('ImmutableContext does not exists, ensure to call `expose` before accessing it.');
    }

    return context;
};
