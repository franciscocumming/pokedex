import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router/';
import i18n from './plugins/i18n/';
import mitt from 'mitt';
import copyText from "@meforma/vue-copy-to-clipboard";
const eventBus = mitt();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(copyText);
app.mount('#app')
app.config.globalProperties.eventBus = eventBus
app.config.devtools = true
