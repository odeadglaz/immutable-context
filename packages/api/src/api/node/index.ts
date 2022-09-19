import { storage } from './global';

export const getImmutableData = () => {
    const context = storage.getStore();

    if (!context) {
        throw new Error('ImmutableData does not exists, ensure to call `expose` before accessing it.');
    }

    return { ...context };
};

export {
    storage
};
