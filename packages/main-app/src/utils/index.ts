import { getImmutableContext } from '@immutable/api';

export default {
    reportEvent: (eventName: string) => {
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