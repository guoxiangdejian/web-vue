import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	isLogin: 0, //初始时候给一个 isLogin=0 表示用户未登录
	addIndex:0
};
const mutations = {
	changeLogin(state, data) {
		state.isLogin = data;
	},
	changeIndex(state, data) {
		state.addIndex = data;
	}
};
export default new Vuex.Store({
	state,
	mutations
})