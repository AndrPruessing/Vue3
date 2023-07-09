import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App)
// add global store via app.use (nutzt plugins)
app.use(store)
//routing einfügen
app.use(router)
// mounten der app
app.mount('#app');
