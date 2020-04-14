import '@babel/polyfill';
import Vue from 'vue'
import App from 'App';
import Vuex from 'vuex';
//import router from 'route';
//import 'scss/global/global.scss';

Vue.use(Vuex);
new Vue({
    el: '#app',
   // router,
   
    render: h=>h(App),
    
}); 


