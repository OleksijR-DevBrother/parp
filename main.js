const express = require("express");

const app = express();

function someHeavyStuff() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += Math.random();
  }
  return sum;
}

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/some-heavy-stuff", (req, res) => {
  const result = someHeavyStuff();
  res.send(`Finished! Result: ${result}`);
});

const PORT = 333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
