export interface ImmutableContext {
    url: string;
    userAgent: string;
    country: string;
    userId?: number;
    uid: string;
}

export type getImmutableContext = () => ImmutableContext;
