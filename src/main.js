// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios'
import store from './store/index.js'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;

Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
	let username = sessionStorage.getItem("user_name");
	if(to.matched.some( m => m.meta.auth)){
		if (store.state.isLogin=='100' || username) {
			 next()
		}else{
			next({path:'/login',query:{ Rurl: to.fullPath} })
		}
	}else{
		next() 
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	store,
	template: '<App/>'
})