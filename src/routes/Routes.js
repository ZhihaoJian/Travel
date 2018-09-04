import VueRouter from 'vue-router';
import Home from '../pages/Home/Home';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

export default router;