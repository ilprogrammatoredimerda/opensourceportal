const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/* Send the index.html containing React bootstrap code */
const sendIndexFile = (res) => {
  res.sendFile(path.resolve(__dirname + "/../../build/index.html"));
}

/* Resolve all static files to this path */
app.use(express.static(path.resolve(__dirname + "/../../build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
* Map all the URI paths to avoid React Router to
* lose the page in case of redirect or manual URL search
*/
app.get("/", (req, res) => {
  sendIndexFile(res);
})

app.get("/submit", (req, res) => {
  sendIndexFile(res);
})

app.get("/projects", (req, res) => {
  sendIndexFile(res);
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../build/404.html"))
})

//dummy for tests
app.post("/api/newProject", (req, res) => {
    console.dir(req.body)
    res.sendStatus(200);
});

/* Start the server */
app.listen(3000, () => {
  console.log("OSF listening on port 3000");
})
