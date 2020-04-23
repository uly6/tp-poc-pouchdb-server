var express = require("express");
const cors = require("cors");
var PouchDB = require("pouchdb");

var app = express();

app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,POST,PUT,DELETE,COPY",
    allowedHeaders:
      "accept,accept-language,content-language,content-type,Authorization,Origin,Referer",
    credentials: true,
    preflightContinue: false,
  })
);

app.use(require("express-pouchdb")(PouchDB.defaults({ prefix: "./db/" })));

app.listen(process.env.PORT || 3006, () => {
  console.log(`Server listening on ${process.env.PORT || 3006}`);
});
