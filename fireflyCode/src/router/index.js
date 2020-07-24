import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/home'
import Products from '@/views/products/products'
import About from '@/views/about/about'
import Contact from '@/views/contact/contact'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		name: 'HOME',
		component: Home,
		beforeEnter: (to, from, next) => {
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
			next()
		}
	}, {
		path: '/products',
		name: 'PRODUCTS',
		component: Products,
		beforeEnter: (to, from, next) => {
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
			next()
		}
	}, {
		path: '/about',
		name: 'ABOUT US',
		component: About,
		beforeEnter: (to, from, next) => {
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
			next()
		}
	}, {
		path: '/contact',
		name: 'CONTACT US',
		component: Contact,
		beforeEnter: (to, from, next) => {
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
			next()
		}
	}]
})
