var React = require('react');
var Tlen = require('./Tlen.jsx'); 

var Tomato = React.createClass({
    getInitialState: function() {
        return {
            u:0
        };

    },
    testFunctio: function(fo) {
        this.props.testonClick('tomato');
    },
    render: function () {
        _this = this;
        console.log('tomato props =',this.props.testprop);
        return (
            <div>
                <h1>www.tomatohub.info</h1>
                <Tlen {...this.props} />
                <p>{this.props.testprop}</p>
            </div>
        );
    }
});

module.exports = Tomato;