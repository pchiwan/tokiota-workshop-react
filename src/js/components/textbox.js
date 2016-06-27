var React = require('react');
var globals = require('../globals');
var socket = globals.socket;

var Textbox = React.createClass({
    _handleSubmit: function(event){
        event.preventDefault();

        if(!(event.target.text.value.length > 0)) return;

        var message = {
            username: this.props.username,
            text: event.target.text.value
        };

        socket.emit('message:send', message);
        event.target.text.value = null;
    },
    _handleKeyUp: function(event){
        if(event.target.value.length > 0) return this.refs.submit.classList.add('active');
        return this.refs.submit.classList.remove('active');
    },
    render: function(){
        return(
            <form id="text-box" onSubmit={this._handleSubmit}>
                <input type="text" id="text" placeholder="Your message" autoComplete="off" onKeyUp={this._handleKeyUp} />
                <button type="submit" className={"fa fa-paper-plane"} ref={"submit"} ></button>
            </form>
        );
    }
});

module.exports = Textbox;
