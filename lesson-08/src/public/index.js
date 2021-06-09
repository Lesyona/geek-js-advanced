import Vue from "vue";
import VueRouter from 'vue-router';
import appMain from './js/main'
import './scss/styles.scss'

Vue.use(VueRouter);
const app = new Vue(appMain);
