const http = require("http");
const { PORT = 8000 } = process.env;
const fs = require("fs");
const path = require("path");
const PUBLIC_DIR = path.join(__dirname, "../public");

function readHtml(file) {
  const htmlFilePath = path.join(PUBLIC_DIR, file);
  const readHtmlFile = fs.readFileSync(htmlFilePath, "utf-8");
  return readHtmlFile;
}

function onRequest(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(readHtml("index.html"));
      return;

    case "/cari-mobil":
      res.writeHead(200);
      res.end(readHtml("cari_mobil.html"));
      //   res.end(readHtml("cari_mobil.css"));

      return;

    default:
      res.writeHead(404);
      res.end("error");
      return;
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Anjay jalan di Port : ${PORT}`);
});
