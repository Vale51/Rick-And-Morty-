const { log } = require("console");
const data = require("./utils/data");
const http = require("http");

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").pop();
    // console.log(data);
    
    
    for (const char of data) {
        
       
            //string //int
        if (+id === char.id) {
            
            
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(char));
            return;
        }
      }
      

    // If the character is not found, send a 404 response
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("Character not found.");
  } else {
    // If the URL doesn't match, send a 404 response
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("Page not found.");
  }
})

.listen(3001, () => {
  console.log('Server is running on port 3001');
});
