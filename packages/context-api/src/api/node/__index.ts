import { AsyncLocalStorage }  from 'async_hooks';
import { ImmutableData } from '../../types';

const existingStore = global["__IMMUTABLE_CONTEXT_STORAGE"];

export const storage = existingStore as AsyncLocalStorage<ImmutableData> || new AsyncLocalStorage<ImmutableData>();

global["__IMMUTABLE_CONTEXT_STORAGE"] ||= storage;

export const getImmutableData = () => {
    const context = storage.getStore();

    if (!context) {
        throw new Error('ImmutableData does not exists, ensure to call `expose` before accessing it.');
    }

    return context;
};
