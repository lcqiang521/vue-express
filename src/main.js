// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import jquery from 'jquery'
import util from './util/util';
import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-chalk/index.css' 

Vue.config.productionTip = false

Vue.use(ElementUI);//前端模板
Vue.use(Vuex);//状态机

//Vuex配置状态机
const store = new Vuex.Store({
  state: {
    User: null,
    UID:0
  },
  getters: {
    User: state => {
      return JSON.parse(state.User);
    }
  },
  mutations: {
    updateUser (state,data) {
      state.User = data;
    },
    refresh(state, data){
      localStorage.User = data;
      state.User = data;
    }
  }
})

Vue.prototype.util = util;//工具类
Vue.prototype.jquery = jquery;
Vue.prototype.store = store;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: function() {
      return {}
  },
  watch:{
  	"$route":'checkLogin'
  },
  //初始化判断登录状态
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin: function () {
      if(this.util.getCookie('UID')){
        if (window.localStorage.getItem('User')) {
          store.commit('refresh', window.localStorage.getItem('User'));
        }
        console.log(this.util.getCookie('UID'));
        console.log(this.store.getters.User);
        //this.$router.push("/index");
      }else{
        this.$router.push("/login");
      }
      
    }
  }
}).$mount('#app')
