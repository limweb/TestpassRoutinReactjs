var express = require('express');
var app = express();

// // Load React
var React = require('react');
// // Use node-jsx to convert JSX to JS
require('node-jsx').install({
    extension: '.jsx'
});
 
// Set static folder
app.use(express.static('public'));
 
// Setup template engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', 'src/templates/');
 
// Start a server and listens on port 3000
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('SiamHTML App listening at http://%s:%s', host, port);
});

// Load Routes
// var App = React.createElement(require('./src/js/react/components/App.jsx'));

// Load Routing Library
var Router = require('react-router');
 
// Load Routes
var routes = require('./src/js/react/routes.jsx');
var sss = 'singletonsss'; 
app.get('*', function(req, res){
		Router.run(routes, req.url, function(Handler, state) {
			state.params.sss = sss;
		    var params = state.params;
		    var testglobal = 'singatontest';
			console.log('server state.params',state.params);
		    var App = React.createElement(Handler, params);
		    console.log('server before render',App.props);
		    apps = React.renderToString(App);
		    console.log('app to string =',apps);
		    res.render("index.handlebars", {
		        markup: apps
		    });
	    });
});