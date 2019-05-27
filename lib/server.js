const App = require('./app');
const debug = require('debug')('app-server')

class Server {

    static start() {
        new App()
            .buildApp()
            .listen(process.env.APP_PORT, () => {
                debug('Running at port %s', process.env.APP_PORT)
            });
    }

}

Server.start();
