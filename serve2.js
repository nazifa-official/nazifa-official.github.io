const http=require('http'),fs=require('fs'),path=require('path');
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.pdf':'application/pdf'};
const root=process.cwd();
const s=http.createServer((req,res)=>{let u=decodeURIComponent(req.url.split('?')[0]);if(u==='/')u='/index.html';
fs.readFile(path.join(root,u),(e,d)=>{if(e){res.writeHead(404);res.end('404');}else{res.writeHead(200,{'Content-Type':types[path.extname(u)]||'application/octet-stream'});res.end(d);}});});
s.listen(8123,()=>console.log('up'));
