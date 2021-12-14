const http = require("http");

const server = http.createServer((req, res) => {
  const read = req.url;
  if (read === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Welcome to about us page");
    res.end();
  } else if (read === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Welcome to contact us page");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  }
});

server.listen(8000);
