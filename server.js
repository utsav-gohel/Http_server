const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("</html> <h1>Welcome to Home page</h1> </html>");
    res.end();
  } else if (req.url == "/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "hello World" }));
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html> <h1>Welcome to About Us page</h1> </html>");
    res.end();
  }
});
server.listen(3000, () => {
  console.log("server started");
});
