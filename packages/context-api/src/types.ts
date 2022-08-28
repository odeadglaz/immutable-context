import { IResult } from 'ua-parser-js';

export interface ImmutableContext {
    url: string;
    userAgent: IResult;
    isTouch: boolean;
    country: string;
    userId?: number;
    uid: string;
}

export type getImmutableContext = () => ImmutableContext;
