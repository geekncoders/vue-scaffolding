require('./bootstrap');
import Vue from 'vue'
import router from './route'

Vue.component('mainapp', require('./components/mainapp.vue').default)
let app = new Vue({
    el: '#app',
    router
})