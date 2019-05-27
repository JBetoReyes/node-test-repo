const routers = {
    posts: require('./postsRouter')
};
const debug = require('debug')('app-routers');

module.exports = class Routers {
    static addRouters(app) {
        Object.keys(routers).forEach((entityName) => {
            const Router = routers[entityName];
            const router = new Router(entityName).router;
            debug('Adding %s router', entityName);
            app.use(router);
        })
    }
}