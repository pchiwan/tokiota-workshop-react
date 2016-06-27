var React = require('react');
var services = require('../services');

var Login = React.createClass({
    _handleSubmit: function(event){
        event.preventDefault();
        var self = this,
            promise = services.login.authenticate(event.target.username.value);

        promise.then(function(response){
            if(response.success){
                self.props._setUsername(response.username);
            }
        });
    },
    render: function(){
        return (
            <form id="login" onSubmit={this._handleSubmit}>
                <input id="username" type="text" placeholder="Username" autoComplete="off" />
            </form>
        );
    }
});

module.exports = Login;
