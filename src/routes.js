import HomePage from "./homePages/homePage";
import Tool, { Counter } from "./tools";
import Game, { ThreeDoors, GuessNumber, TicTacKu } from "./games";
import Pet, { Dog, Cat } from "./pets";
import Other, { BackgroundColorChange } from "./others";

// redux
// import App from './games/guessNumber/App';

const HomePath = '/React_practice';

const routes = [
    {
        path: HomePath,
        component: HomePage,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: `${HomePath}/tools`,
        component: Tool,
        breadcrumbName: 'tools',
        routes: [
            {
                path: `${HomePath}/tools/counter`,
                component: Counter,
                breadcrumbName: 'Counter'
            }
        ]
    },
    {
        path: `${HomePath}/games`,
        component: Game,
        breadcrumbName: 'games',
        routes: [
            {
                path: `${HomePath}/games/threedoors`,
                component: ThreeDoors,
                breadcrumbName: 'ThreeDoors'
            },
            {
                path: `${HomePath}/games/guessnumber`,
                component: GuessNumber,
                breadcrumbName: 'guessnumber'
            },
            {
                path: `${HomePath}/games/tictacku`,
                component: TicTacKu,
                breadcrumbName: 'tictacku'
            },
        ]
    },
    {
        path: `${HomePath}/pets`,
        component: Pet,
        breadcrumbName: 'pets',
        routes: [
            {
                path: `${HomePath}/pets/dog`,
                component: Dog,
                breadcrumbName: 'Dog'
            },
            {
                path: `${HomePath}/pets/cat`,
                component: Cat,
                breadcrumbName: 'Cat'
            }
        ]
    },
    {
        path: `${HomePath}/others`,
        component: Other,
        breadcrumbName: 'others',
        routes: [
            {
                path: `${HomePath}/others/backgroundColorChange`,
                component: BackgroundColorChange,
                breadcrumbName: 'BackgroundColorChange'
            }
        ]
    }
];

export default routes;