import { getImmutableData } from '@immutable/api';

export default {
    reportEvent: (eventName: string) => {
        console.log('Plain Javascript access:', getImmutableData().isTouch);
        let { url, isTouch, userAgent } = getImmutableData();

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