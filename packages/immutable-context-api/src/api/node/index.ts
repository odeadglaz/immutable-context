import { AsyncLocalStorage }  from 'async_hooks';
import { ImmutableContext } from '../../types';

global["__IMMUTABLE_CONTEXT_STORAGE"]  ||= new AsyncLocalStorage<ImmutableContext>();
export const storage = global["__IMMUTABLE_CONTEXT_STORAGE"] as AsyncLocalStorage<ImmutableContext>;

export const getImmutableContext = () => {
    const context = storage.getStore();

    if (!context) {
        throw new Error('ImmutableContext does not exists, ensure to call `expose` before accessing it.');
    }

    return context;
};
