import ResourceManager from '../ResourceManager/index';
import Helper from '../Helper/index';


export const HOME_ROUTE = [
    {
        path: '/dashboard/resource-manager',
        exact: true,
        component: ResourceManager,
    }, {
        path: '/dashboard/helper',
        exact: false,
        component: Helper,
    }
];

export const DEFAULT_HOME_ROUTE = HOME_ROUTE[0];