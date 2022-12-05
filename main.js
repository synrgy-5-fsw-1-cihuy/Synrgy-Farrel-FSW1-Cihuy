const express = require("express");
const PORT = 8050 || process.env.PORT;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

const router = require("./router/router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Application running in http://localhost:${PORT}`);
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Challenge 06 API Documentation",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Binar Synrgy",
        url: "https://binaracademy.com",
        email: "binaracademy.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8050/",
      },
    ],
  },
  apis: ["./router/router.js"],
};
const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
