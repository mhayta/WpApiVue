import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./views/Home"
import Post from "./views/Post"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/:slug',
            name: 'post',
            component: Post
        }
    ]
})