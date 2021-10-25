const { isTypedArray } = require('util/types');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json( { message: 'Connected!' });
});

module.exports = routes;

// First, we are requiring Express and creating a new instance of Router on it 
// We are holding that in a variable called routes.
//Then, we are creating a route at the root path of this Router that sends back a simple message.
//Then, we export the Router.
