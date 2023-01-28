const http=require('http')
const port=process.env.PORT||1008;//or 1008 port
// jo bhi hamari process ko port mil raha hai wo lelo
//below one is the method in http which takes call back function
//it take two parameter request and response
const server=http.createServer((req,res)=>{
console.log(req.url);
res.statusCode=200;
// setting header content type: request will be serverd as html
res.setHeader('Content-Type','text/html')
//to tel client which type of content is sent by server
res.end('<h1>Hello its an http server</h1>');
// what response do we need to send
});// now we need to listen the server
// listen takes 2 thing a. port and callback function
server.listen(port,()=>
{console.log('server is listening on port' +port);
});
