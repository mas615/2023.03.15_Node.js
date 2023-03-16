var http =  require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    // response.writeHead(200, {
    //     'Set-Cookie':['yummy=choco','tasty=strawberry']
    // });
    if(request.headers.cookie !== undefined){
    var cookies = cookie.parse(request.headers.cookie);
    console.log(cookies);
    console.log(cookies.yummy);
    }
    response.end("CookieTest!!");
}).listen(3000);