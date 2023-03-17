var http =  require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    if(request.headers.cookie !== undefined){
    var cookies = cookie.parse(request.headers.cookie);
    console.log(cookies);
    console.log(cookies.yummy);
    }
    response.writeHead(200, {
        'Set-Cookie':[
            'yummy=choco',
            'tasty=strawberry',
            `Permanent=cookies; Max-Age=${60*60*24}`,
            'Securezzz=Securezz; Secure',
            'HttpOnly=Httponly; HttpOnly'
        ]
    });
    response.end("CookieTest!!");
}).listen(3000);