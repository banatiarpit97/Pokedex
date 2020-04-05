export const debounce = (cb, delay=300, maxWait=1000) => {
    let timer;
    let maxWaitTimer;

    return function (value) {
        clearTimeout(timer);
        if(!maxWaitTimer){
            maxWaitTimer = setTimeout(() => {
                cb(value);
                maxWaitTimer = null;
            }, maxWait)
        }
        timer = setTimeout(() => {
            clearTimeout(maxWaitTimer);
            maxWaitTimer = null;
            cb(value);
        }, delay);
    }
} 