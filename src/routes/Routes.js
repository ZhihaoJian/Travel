import VueRouter from 'vue-router';
import Home from '../pages/Home/Home';
import City from '../pages/City/City';
import Detail from '../pages/Detail/Detail';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/city',
        name: 'city',
        component: City
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'hash'
});

export default router;