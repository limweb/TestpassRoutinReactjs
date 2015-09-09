var React = require('react');
var Router = require('react-router');
var Global = require('react-global');

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var App = React.createClass({
     getDefaultProps: function() {
         return {
             testprop:'default',
         };
     },
     getInitialState: function() {
         return {
             u:0, 
         };
     },
     upLink:function(p){
        console.log('uplink',p);
        this.props.testprop = p;
        this.state.u++;
        this.setState({u:this.state.u});
     },
     render: function () {
        console.log("before render app");
        console.log('props =',this.props);
        console.log('state =',this.state);
     return (
         <div>
             <header>
                 <ul>
                     <li><Link to="home"   >Home</Link></li>
                     <li><Link to="about"  >About</Link></li>
                     <li><Link to="tomato" >Tomato</Link></li>
                 </ul>
             </header>
             <RouteHandler {...this.props} uplink={this.upLink} />
         </div>
     );
   }
});
 
module.exports = App;