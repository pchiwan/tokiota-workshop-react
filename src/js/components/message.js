var React = require('react');

var Message = React.createClass({
    render: function(){
        return (
            <div className={"message"}>
                <span className={username}>{this.props.username}</span>
                <span className={text}>{this.props.text}</span>
            </div>
        );
    }
});

module.exports = Message;
