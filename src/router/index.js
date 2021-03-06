import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Install from '@/components/Install'
import Article from '@/components/Article'
import Login from '@/components/Login'
import ArticleEditor from '@/components/ArticleEditor'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/install',
      name:'Install',
      component:Install
    },
    {
      path: '/tag/:tag',
      name: 'Home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add',
      name: 'AddArticle',
      component: ArticleEditor
    },
    {
      path: '/edit',
      name: 'EditArticle',
      component: ArticleEditor
    }
  ]
})
