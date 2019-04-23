export default [
    {
        path:'/',
        component: resolve => require(['./page/404.vue'], resolve)
    },
    {
        path:'/home/:id?',
        component: resolve => require(['./page/Home/Home.vue'], resolve),
        children:[{
            path:'child',
            component: resolve => require(['./page/Home/Child.vue'],resolve)
        }]
    },
    {
        path:'/about',
        component: resolve => require(['./page/About/About.vue'], resolve)
    },
    {
        path:'/list',
        component: resolve => require(['./page/Home/list.vue'], resolve)
    },
]