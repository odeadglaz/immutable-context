import { IResult } from 'ua-parser-js';

export interface ImmutableData {
    url: string;
    userAgent: IResult;
    isTouch: boolean;
    country: string;
    userId?: number;
    uid: string;
}

export type getImmutableContext = () => ImmutableData;
