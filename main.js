const express = require("express");
const { Worker } = require("worker_threads");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/some-heavy-stuff", (req, res) => {
  const worker = new Worker("./some-heavy-stuff.js");
  worker.on("message", (result) => {
    res.send(`Finished! Result: ${result}`);
  });
});

const PORT = 333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
