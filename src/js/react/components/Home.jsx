var React = require('react');

var Home = React.createClass({
	clickHanle:function(){
		console.log('this.click handle');
		this.props.testprop = 'home';
		console.log('home click props=',this.props);
		this.props.uplink(this.props.testprop);
	},
    render: function () {
    	console.log("home props =",this.props.testprop);
        return (
            <div onClick={this.clickHanle} >
                Hello, SiamHTML Home 123!
                <p>{this.props.testprop}</p>
            </div>
        );
    }
});

module.exports = Home;