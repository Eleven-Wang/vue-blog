import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index/Index.vue'
import Login from '../views/Login/Login.vue'
import Admin from '../views/Admin/Admin.vue'

// import Home from '../views/Index/Home/Home.vue'
import Note from '../views/Index/Note/Note.vue'
import Program from '../views/Index/Program/Program.vue'
import About from '../views/Index/About/About.vue'

import NoteTypeList from '../views/Index/Note/NoteTypeList.vue'
import Detail from '../views/Index/Note/NoteDetail.vue'

import Star from '../views/Index/Program/Program_Star/index.vue'
import ShopGoods from '../views/Index/Program/Program_ShopGoods/index.vue'
import ToDoList from '../views/Index/Program/Program_ToDoList/index.vue'
import MyCart from '../views/Index/Program/Program_MyCart/index.vue'
import Album from '../views/Index/Program/Program_Album/index.vue'
import Search from '../views/Index/Program/Program_Search/index.vue'

import AddNotes from '../views/Admin/AddNotes/AddNotes.vue'
import NoteList from '../views/Admin/NoteList/NoteList.vue'
import Message from '../views/Admin/Message/Message.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            children: [
                {
					path: '',
					name: 'home',
                    redirect: '/note'
                },
                {
					path: '/note',
					component: Note,
					children: [
						{
							path: '',
							name: 'note',
							redirect: 'all'
						},
						{
							path: ':type',
							name: 'noteTypeList',
							component: NoteTypeList
						},
						{
							path: 'detail/:detailId',
							name: 'detail',
							component: Detail,
							props: true // 把path里的key(detailId)传到组件props里
						}
					]
                },
                {
                    path: '/program',
					component: Program,
					children: [
						{
							path: '',
							name: 'program',
							redirect: {
								name: 'star'
							}
						},
						{
							path: 'shop_goods',
							name: 'shopGoods',
							component: ShopGoods
						},
						{
							path: 'star',
							name: 'star',
							component: Star
						},
						{
							path: 'toDoList',
							name: 'toDoList',
							component: ToDoList
						},
						{
							path: 'myCart',
							name: 'myCart',
							component: MyCart
						},
						{
							path: 'album',
							name: 'album',
							component: Album
						},
						{
							path: 'search',
							name: 'search',
							component: Search
						}
					]
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin',
            component: Admin,
            children: [
                {
                    path: '',
                    name: 'addNotes',
                    component: AddNotes
                },
                {
                    path: 'noteList',
                    name: 'noteList',
                    component: NoteList
                },
                {
                    path: 'message',
                    name: 'message',
                    component: Message
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to, from)
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router