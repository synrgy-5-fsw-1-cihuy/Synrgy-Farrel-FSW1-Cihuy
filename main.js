const express = require("express");
const PORT = 8050 || process.env.PORT;

const app = express();

const router = require("./router/router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Application running in http://localhost:${PORT}`);
});
