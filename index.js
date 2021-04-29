const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

var apiRoutes = require("./calculadoraRoute")

app.use(
  '/api-docs',
  apiRoutes,
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.use('/', apiRoutes);

app.listen(8001, () => {
  console.log("server listening on port 8001");
});