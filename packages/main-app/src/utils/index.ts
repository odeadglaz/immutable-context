import { getImmutableContext } from '@immutable/api';
import * as API from "@immutable/api";

export default {
    reportEvent: (eventName: string) => {
        console.log('Plain Javascript access:', API.getImmutableContext().userAgent);
        let { url, isTouch, userAgent } = getImmutableContext();

        const reportData = {
            eventName,
            url,
            isTouch,
            browser: userAgent.browser.name
        };

        return dummyReportCall(reportData);
    }
}

const dummyReportCall = (data: unknown) => new Promise((resolve) => setTimeout(() => {
    resolve(data);
}, 1000));