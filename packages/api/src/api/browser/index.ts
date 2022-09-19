export const BROWSER_KEY = '__IMMUTABLE_CONTEXT__';

export const getImmutableData = () => {
    const context = window[BROWSER_KEY];

    if (!context) {
        throw new Error('ImmutableData does not exists, ensure to set your initial HTML the `markup` result.');
    }

    return { ...context };
};
