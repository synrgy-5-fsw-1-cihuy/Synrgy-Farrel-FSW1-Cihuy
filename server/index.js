console.log("Implement servermu disini yak 😝!");

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const static = require("node-static");
const PUBLIC_DIR = path.join(__dirname, "../public");
const fileStatic = new static.Server(PUBLIC_DIR);

const { PORT = 8000 } = process.env;

function htmlReaderFile(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIR, htmlFileName);
  const readHtmlFile = fs.readFileSync(htmlFilePath, "utf-8");

  return readHtmlFile;
}

// Request response handler
function onRequest(request, response) {
  switch (request.url) {
    case "/":
      response.writeHead(200);
      response.end(htmlReaderFile("index.html"));
      return;
    case "/cari-mobil":
      response.writeHead(200);
      response.end(htmlReaderFile("cari_mobil.html"));
      return;

    default:
      const fileTypes = {
        css: "text/css",
        js: "application/javascript",
        ico: "image/x-icon",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        json: "application/json",
        map: "application/json",
        txt: "text/plain",
      };
      const pathname = url.parse(request.url, true).pathname;
      fs.readFile("./public" + pathname, (err, file) => {
        if (err) {
          response.status = 404;
          response.end("404 Not Found");
          return;
        }

        for (const [key] of Object.entries(fileTypes)) {
          const end = `.${key}`;
          if (request.url.endsWith(end)) {
            response.setHeader("Content-Type", fileTypes[key]);
            response.end(file);
            return;
          }
        }
      });
      return;
  }
}

// Server instance
const server = http.createServer(onRequest);

// Listen port nya
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
