const http = require('http');
const PORT = 3000;
const fs = require('fs');


// pages 
const indexpage = fs.readFileSync('./index.html', 'utf8');
const aboutpage = fs.readFileSync('./about.html', 'utf8');
const contactpage = fs.readFileSync('./contact.html', 'utf8');
const errorpage = fs.readFileSync('./error.html','utf8')
const css = fs.readFileSync('./output.css', 'utf8');

//creating the http server
const server = http.createServer((req,res)=>{
     const {url} = req;    //getting the url from the request object
     if (url === '/output.css') {          //routing for css file
        res.writeHead(200, { 'Content-Type': 'text/css' });
        return res.end(css);
    }
     if(url === '/' || url==='/home'){     //routing for home page
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(indexpage);
        res.end();
     }
     else if(url === '/about'){         //routing for about page
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(aboutpage)
        res.end();
     }
     else if(url === '/contact'){      //routing for contact page
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(contactpage);
        res.end();
     }
     else{                //routing for error page
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(errorpage);
        res.end();
     }
     
     
})
//server listening on port 3000
server.listen(PORT,()=>{
    console.log(`up and running at http://localhost:${PORT}`);
})