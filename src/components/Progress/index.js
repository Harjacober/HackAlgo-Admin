/* eslint-disable */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default {
    install: (Vue, options = {}) => {
        options = Object.assign({ easing: 'ease', speed: 500 }, options);
        NProgress.configure(options);

        Vue.prototype.$progress = NProgress;
        Vue.$progress = Vue.prototype.$progress;
        if (process.env.NODE_ENV === 'development') window.progress = Vue.prototype.progress;
    },
};
