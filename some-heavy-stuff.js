const { parentPort } = require("worker_threads");

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += Math.random();
}

console.log(sum);

parentPort.postMessage(sum);
