/**
 * Write a node.js code that retrieve NAV (Net Asset Value) of a Fund from this website 
 * https://codequiz.azurewebsites.net/
 * The code should be in a single js file, 
 * and can be run using “node yourfile.js FUNDCODE” using node 12. 
 * After running “node yourfile.js BEQSSF” we should get BEQSSF nav
 * print out in the console (11.247), 
 * similary running “node yourfile.js BM70SSF” should print out 9.9774 .
 */

const http = require('http');
var optionList = ['B-INCOMESSF','BM70SSF','BEQSSF','B-FUTURESSF'];

var hasCookie = false;
if(optionList.includes(process.argv[2])){
    hasCookie = true;
}

var options = {
    host: 'codequiz.azurewebsites.net',
    path: '/',
    headers: {
        'Content-Type': 'application/html',
        'Cookie': 'hasCookie='+hasCookie
    }
}

 if(process.argv[2] === 'FUNDCODE' || hasCookie){

    // start retrive data    
     var request = http.request(options, function (res) {
        var data = '';
        res.on('data', function (msg) {
            data += msg;
        });
    
        res.on('end', function () {
            console.log(data);
        });
    });
    
    request.on('error', function (e) {
        console.log(e.message);
    });

    request.end();

 }
 