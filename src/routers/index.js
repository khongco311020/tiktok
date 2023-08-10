import config from '~/config';
// LayOuts
import { HeaderOnly } from '~/layouts';

//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Puplic Router
const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.Following, component: Following },
    { path: config.routes.Profile, component: Profile },
    { path: config.routes.Upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.Search, component: Search, layout: null },
];

const privateRoters = [];
export { publicRouters, privateRoters };
