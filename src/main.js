import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../src/tailwind.css';
import '../src/assets/css/style.css';
import mixin from "@/mixins";
Vue.mixin(mixin);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
