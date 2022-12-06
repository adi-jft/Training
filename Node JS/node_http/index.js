const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/html") {
    res.writeHead(200, { "Content-Type": "index.html" });
    fs.readFile("index.html", (err, html) => {
      if (err) {
        res.writeHead(404);
        res.write("Error: 404 not found!");
      } 
      else {
        res.write(html);
      }
      res.end();
    });
  }

  if(req.url == "/json"){
    res.writeHead(200, {"Content-Type": "db.json"});
    fs.readFile("db.json", (err, json) => {
        if(err){
            res.writeHead(404);
            res.write("Error: 404 not found!");
        }
        else{
            res.write(json);
        }
        res.end();
    })
  }

  if(req.url == "/text"){
    res.write("This is a Plain Text Response...");
    res.end();
  }
});

server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port: 3000");
  }
});