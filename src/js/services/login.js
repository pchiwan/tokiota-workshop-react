var globals = require('../globals');
var URI = globals.URI;
var $ = require('jquery');

var Login = (function(){
    var Login = function(){
        var self = this;

        self.authenticate = function(username){
            return $.ajax({
                method: "POST",
                url: URI.base + URI.api + URI.login,
                data: { username: username },
                dataType: "json"
            });
        };
    };
    return new Login();
})();

module.exports = Login;
