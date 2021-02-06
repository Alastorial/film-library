import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
// МЫ ИМПОРТИРУЕМ КОМПОНЕНТЫ (КУСКИ КОДА) В РОУТЕР, ЧТОБЫ ПОДКЛЮЧИТЬ ИХ К САЙТУ ПО ОПРЕДЕЛЕННЫМ ДИРИКТОРИЯМ
Vue.use(Router)

// Короче мы заранее по роутам подгружаем компоненты, чтобы не грузить их потом, круто же
export default new Router({
  routes: [
    {
      path: '/', // ПО ТАКОЙ ССЫЛКЕ МЫ ДОБАВЛЯЕМ КОМПОНЕНТ Home, дальше аналогично
      name: 'home', // Хер знает, зачем нам имя, пока что оно не нужно
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ]
})
