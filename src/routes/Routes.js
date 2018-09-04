import VueRouter from 'vue-router';
import Home from '../pages/Home/Home';
import City from '../pages/City/City';

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
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'hash'
});

export default router;