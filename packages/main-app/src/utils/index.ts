import { getImmutableContext } from '@immutable/api';

const dummyReportCall = (data: unknown) => new Promise((resolve) => setTimeout(() => {
    console.log('Reported', data);
    resolve(data);
}, 1000));

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
