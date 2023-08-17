import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../src/tailwind.css';
import '../src/assets/css/style.css';
import mixin from "@/mixins";
import VueToast from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.mixin(mixin);
Vue.config.productionTip = false;


Vue.use(VueToast, {
    position: "top",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: true,
    maxToasts: 1,
    newestOnTop: true,
    color: 'black',
});


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
