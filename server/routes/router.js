const express = require("express");
const route = express.Router()

const services = require('../services/render');

/**
 * @description Root Route
 * @method GET/
 */

route.get('/', services.homeRoutes);
const controller = require('../controller/controller');
/**
 * @descriptio for add users
 * @method GET/
 */

route.get('/add-user', services.add_user);

/**
 * @description for update users
 * @method GET/
 */

route.get('/update-user', services.update_user);

//Api
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;