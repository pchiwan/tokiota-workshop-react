var React = require('react');
var Message = require('./message');
var globals = require('../globals');
var socket = globals.socket;

var Messages = React.createClass({
    componentDidMount: function(){
        socket.on('message:spread', this._handleMessageSpread);
    },
    _handleMessageSpread: function(message){
        var messages = this.props.messages;
        messages.push(message);
        this.props._setMessages(messages);
    },
    render: function(){
        return (
			<div id="messages">
				{
					this.props.messages.map(function(message, i){
						return <Message key={i} text={message.text} username={message.username}/>;
					})
				}
			</div>
		);
    }
});

module.exports = Messages;
