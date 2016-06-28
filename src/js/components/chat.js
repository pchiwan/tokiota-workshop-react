var React = require('react');
var Messages = require('./messages');
var Textbox = require('./textbox');
var Login = require('./login');

var Chat = React.createClass({
    getInitialState: function(){
        return {
            username: null,
            messages: []
        };
    },
    _setUsername: function(username){
        this.setState({ username: username });
    },
    _setMessages: function(messages){
        this.setState({ messages: messages });
    },
    render: function(){
        if (this.state.username) {
            return (
                <div id="wrapper">
                    <Messages messages={this.state.messages} setMessages={this._setMessages} />
                    <Textbox username={this.state.username} />
                </div>
            );
        }
        return <Login setUsername={this._setUsername} />;
    }
});

module.exports = Chat;
