const PORT = process.env.PORT || 8080;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS
const cors = require('cors');
server.use(cors());

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
