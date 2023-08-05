const { log } = require("console");
const getCharById = require("./controllers/getCharById")

const cors = require("cors"); // Importa el paquete cors
const http = require("http");

const app = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").pop();
    getCharById(res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
  


})




app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
