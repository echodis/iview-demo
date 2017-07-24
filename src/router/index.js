/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from '@/pages/ArticleList';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'ArticleList',
    component: ArticleList
  }, {
    path: '/ArticleList',
    name: 'ArticleList',
    component: ArticleList
  }]
});
