export const BROWSER_KEY = '__IMMUTABLE_CONTEXT__';

export const getImmutableContext = () => {
    const context = window[BROWSER_KEY];

    if (!context) {
        throw new Error('ImmutableContext does not exists, ensure to set your initial HTML the `markup` result.');
    }

    return context;
};
