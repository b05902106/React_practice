import HomePage from "./HomePage";
import Counter from "./Counter";
import Pet, { Dog, Cat } from "./Pets";

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/counter',
        component: Counter,
        breadcrumbName: 'Counter'
    },
    {
        path: '/pets',
        component: Pet,
        breadcrumbName: 'pets',
        routes: [
            {
                path: '/pets/dog',
                component: Dog,
                breadcrumbName: 'Dog'
            },
            {
                path: '/pets/cat',
                component: Cat,
                breadcrumbName: 'Cat'
            }
        ]
    }
];

export default routes;