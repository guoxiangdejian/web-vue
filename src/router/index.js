import Vue from 'vue'
import Router from 'vue-router'
import chooseAdd from '../components/common/chooseAdd.vue'
Vue.use(Router)

export default new Router({
			routes: [{
					path: '/',
					component: () =>
						import('../components/common/Home.vue')
				},
				{
					path: '*',
					component: () =>
						import('../components/common/Home.vue')
				},
				{
					path: '/home',
					component: () =>
						import('../components/common/Home.vue'),
					meta: {
						keepAlive: true
					},

				},
				{
					path: '/older',
					component: () =>
						import('../components/common/Older.vue')
				},
				{
					path: '/find',
					component: () =>
						import('../components/common/Find.vue')
				},
				{
					path: '/person',
					component: () =>
						import('../components/common/Person.vue')
				},
				{
					path: '/shop',
					component: () =>
						import('../components/common/Shop.vue')
				},
				{
					path: '/detail/:bid',
					component: () =>
						import('../components/common/Detail.vue'),
					name: 'detail'
				},
				{
					path: '/login',
					component: () =>
						import('../components/common/login.vue'),
					name: 'login'
				},
				{
					path: '/personinfo',
					component: () =>
						import('../components/common/personInfo.vue'),
					name: 'personinfo',
					meta: {
						auth: true
					}
				},
				{
					path: '/firm',
					component: () =>
						import('../components/common/firm.vue'),
					name: 'firm'
				},
				
				{
					path: '/chooseadd',
					component: () =>
						import('../components/common/chooseAdd.vue'),
					name: 'Chooseadd'
				},
						{
							path: '/shopclass',
							component: () =>
								import('../components/common/shopClass.vue'),
							name: 'shopclass'
						},
						{
							path: '/settlepage',
							component: () =>
								import('../components/common/settlepage.vue'),
							name: 'Settlepage'
						},
						{
							path: '/addAddress',
							component: () =>
								import('../components/common/addAddress.vue'),
							name: 'Adddddress'
						},
						{
							path: '/recom',
							component: () =>
								import('../components/common/recom.vue'),
							name: 'Recom'
						},
						{
							path: '/gold',
							component: () =>
								import('../components/common/gold.vue'),
							name: 'Gold'
						},
						{
							path: '/service',
							component: () =>
								import('../components/common/service.vue'),
							name: 'Service'
						},
						{
							path: '/download',
							component: () =>
								import('../components/common/download.vue'),
							name: 'Download'
						}
				]
				})