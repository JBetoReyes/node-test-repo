const express = require('express');
const routers = require('./routers');

module.exports = class App {
    buildApp() {
        const app = express();
        
        routers.addRouters(app);
        
        return app;
    }
}