var React = require('react');

var About = React.createClass({
    render: function () {
    	console.log("about props=",this.props.testprop);
        return (
            <div>
                Hello, SiamHTML About 123!
                <p>{this.props.testprop}</p>
            </div>
        );
    }
});

module.exports = About;