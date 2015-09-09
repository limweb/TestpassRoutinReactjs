var React = require('react');
 
// โหลดความสามารถต่างๆ ของ react-router
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
 
// โหลด component ต่างๆ ที่จะใช้เป็น handler ของแต่ละ route
     var App = require('./components/App.jsx');
    var Home = require('./components/Home.jsx');
   var About = require('./components/About.jsx');
  var Tomato = require('./components/Tomato.jsx'); 
  var Tlen = require('./components/Tlen.jsx'); 
var NotFound = require('./components/NotFound.jsx');
 
// กำหนด handler ให้กับแต่ละ path
var routes = (
    <Route path="/" handler={App}>
        <Route name="home" path="/" handler={Home}/>
        <Route name="about" path="/about" handler={About}/>
        <Route name="tomato" path="/tomato" handler={Tomato}/>
        <DefaultRoute handler={Home}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);
 
module.exports = routes;