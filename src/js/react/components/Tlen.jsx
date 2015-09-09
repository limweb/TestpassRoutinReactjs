var React = require('react');

var Tlen = React.createClass({
    render: function () {
    	console.log("tlen props =",this.props.testprop);
        return (
            <div>
                <button type="button" >Click Me!</button>
                <p>{this.props.testprop}</p>
            </div>
        );
    }
});


module.exports = Tlen;