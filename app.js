/*
 Qlik Sense ticketing example using the qlik-auth module

 1. Set up a virtual proxy pointing to the service on port 1337 (default)
 2. Export certificates in QMC and copy client.pfx to where you installed this
 */

var http = require('http');
var qlikauth = require('qlik-auth');
http.createServer(function (req, res) {

    //Define user directory, user identity and attributes
    var profile = {
        'UserDirectory': 'QLIK',
        'UserId': 'rikard',
        'Attributes': []
    }

    //Make call for ticket request
    qlikauth.requestTicket(req, res, profile);
}).listen(1337, '0.0.0.0');
console.log('Server running at http://localhost:1337/');
