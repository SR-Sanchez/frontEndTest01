import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// Create the Pinia instance
const pinia = createPinia();

// Create the Vue app instance
const app = createApp(App);

// Use Pinia with the Vue app
app.use(pinia);

// Mount the Vue app
app.mount('#app');