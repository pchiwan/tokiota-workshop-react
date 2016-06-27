var globals = require('../globals');
var URI = globals.URI;
var rp = require('request-promise');

var Login = (function(){
    var Login = function(){
        var self = this;

        self.authenticate = function(username){
            return rp({ method: "POST", uri: URI.base + URI.api + URI.login, body: {username: username}, json: true});
        };
    };
    return new Login();
})();

module.exports = Login;
