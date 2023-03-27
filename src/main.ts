import { createApp } from 'vue'
import './style.css'
import 'animate.css'
import App from './App.vue'
import {createPinia} from 'pinia';
import router from './router/index'
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.directive('truncate',{
    mounted:(el:HTMLElement,binding:any)=>{
        let maxString = el.textContent  ? `${el.textContent.slice(0,15)}...` : el.textContent;
        el.textContent = maxString;
    }
})
app.mount('#app')
