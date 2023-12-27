import { createApp } from 'vue'
import router from "./router/index";
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';
const app = createApp(App)

app.use(router);

app.mount('#app')