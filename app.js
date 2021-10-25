//bring in dependencies
const app = require('express')();
const routes = require('./routes');

//connect all our routes to our application
app.use('/', routes);

//turn on the server
app.listen(3001, () => {
    console.log('App listening on http://localhost:3001');
});



//We are bringing in Express and our routes. We are connecting our routes to our application using .use
//Lastly, we are turning the server on.