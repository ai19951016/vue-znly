import App from '../App.vue';


const home = resolve => require(['../page/home.vue'], resolve);		// 首页
const introduction = resolve => require(['../page/scenicIntroduction.vue'], resolve);
const listDetail = resolve => require(['../components/listDetail.vue'], resolve);
const travelBox = resolve => require(['../page/travelBox.vue'], resolve);
const externalMap = resolve => require(['../page/externalMap.vue'], resolve);
const service = resolve => require(['../page/service.vue'], resolve);
const dropBox = resolve => require(['../components/dropBox.vue'], resolve);

// 定义路由
const routes = [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '/',
				redirect: { name: 'home' }
			},
			{
				path: '/home',
				name: 'home',
				component: home
			}, {
				path: '/scenic/introduction', 
				name: 'introduction', 
				component: introduction
			}, {
				path: '/scenic/detail/:id/:type/:identifier',
				name: 'listDetail', 
				component: listDetail
			}, {
				path: '/travelBox',
				name: 'travelBox', 
				component: travelBox
			}, {
				path: '/externalMap',
				name: 'externalMap',
				component: externalMap
			}, {
				path: '/service/:type',
				name: 'service',
				component: service
			}, {
				path: '/dropBox/:url/:title',
				name: 'dropBox',
				component: dropBox
			}
		]
	}
]


export default routes;