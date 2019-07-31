import HomePage from "./homePage";
import Tool, { Counter } from "./tools/tool";
import Game, { ThreeDoors } from "./games/game";
import Pet, { Dog, Cat } from "./pets/pet";
import Other, { BackgroundColorChange } from "./others/other";

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/tools',
        component: Tool,
        breadcrumbName: 'tools',
        routes: [
            {
                path: '/tools/counter',
                component: Counter,
                breadcrumbName: 'Counter'
            }
        ]
    },
    {
        path: '/games',
        component: Game,
        breadcrumbName: 'games',
        routes: [
            {
                path: '/games/threedoors',
                component: ThreeDoors,
                breadcrumbName: 'ThreeDoors'
            }
        ]
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
    },
    {
        path: '/others',
        component: Other,
        breadcrumbName: 'others',
        routes: [
            {
                path: '/others/backgroundColorChange',
                component: BackgroundColorChange,
                breadcrumbName: 'BackgroundColorChange'
            }
        ]
    }
];

export default routes;