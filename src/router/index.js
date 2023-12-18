import Ru from '../pages/ru/Ru.vue'
import En from '../pages/en/En.vue'
import Tr from '../pages/tr/Tr.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'Ru',
			component: Ru,
		},
		{
			path: '/en',
			name: 'En',
			component: En,
		},
		{
			path: '/tr',
			name: 'Tr',
			component: Tr,
		},
	],
})

export default router
