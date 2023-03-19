const http=require('http');
/*
function datasend(req,resp)
{
    resp.write('this is shabbir rizvi');
    resp.end();
}
http.createServer(datasend).listen(4500);
*/
http.createServer((req,resp)=>{
    resp.write('this is shabbir rizvi');
    resp.end();
}).listen(4500);