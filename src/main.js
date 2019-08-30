// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'

import './utils/common.css'   //公共样式
import Axios from './utils/request.js'   //网络请求类，示例在Message.vue
import VUEX from '@/utils/store.js'    //vue
import ApiAxios  from '@/utils/api.js'

Vue.config.productionTip = false

Vue.use(element)

Vue.use(iView);
Vue.prototype.$request = Axios;
Vue.prototype.$store = VUEX;
Vue.prototype.apiAxios = ApiAxios

Vue.config.productionTip = false
/* eslint-disable no-new */

// 引入mockjs
require('../mock/mock.js')


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
