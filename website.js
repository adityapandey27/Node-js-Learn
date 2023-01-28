const http=require('http')
const port=process.env.PORT||2000;
const {Console} =require('console');
const fs=require('fs');
const server=http.createServer((req,res)=>{
res.setHeader('Content-Type','text/html')
if(req.url=='/')
{res.statusCode=200;
 const data=fs.readFileSync('index.html');
 res.end(data.toString())
 res.end('<h1>It is Aditya Pandey</h1>'); 
}
else if(req.url=='/about')
{   res.statusCode=200;   
    res.end('<h1>It is Aditya Pandey</h1>');
}
else{
    res.statusCode=404;
    res.end('<h1>Page not found</h1>');
}});
server.listen(port,()=>{console.log('server is listening on port' +port);
});
