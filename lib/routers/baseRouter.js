const express = require('express');
const debug = require('debug')('app-base-router');
const capitalize = require('lodash/capitalize');
const upperCase = require('lodash/upperCase');

module.exports = class BaseRouter {

    constructor(entityName, extraRoutes = []) {
        this._router = express.Router();
        this._entityName = entityName;
        this.getRoutes(extraRoutes).forEach((routeName) => {
            const route = this[routeName]();
            if (route && route.path && route.method && route.handler) {
                debug('%s %s route initialized', upperCase(route.method), entityName);
                this._router[route.method](route.path, route.handler);
            } else {
                debug('%s route is not well defined %o', route, this[route]);
            }
        });
    }

    get router() {
        return this._router;
    }

    getRoutes(extraRoutes) {
        const entityName = capitalize(this._entityName);
        const routes = [];
        [
            `get${entityName}`,
            `create${entityName}`,
            `edit${entityName}`,
            `delete${entityName}`,
            `get${entityName}ById`,
            ...extraRoutes
        ].forEach((routeName) => {
            if (this[routeName]) {
                routes.push(routeName);
            }
        });
        return routes;
    }

};