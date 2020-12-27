const worker = new Worker("worker.js");
const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 100000); // 100000 primes
const ia = new Int32Array(sab); // ia.length == 100000
const primes = new PrimeGenerator();
for (let i = 0; i < ia.length; i++) ia[i] = primes.next();
worker.postMessage(ia);
// worker.js
let ia;
self.addEventListener("message", function(event) {
  ia = event.data; // ia.length == 100000
  console.log(ia[30]); // prints 100, the 31st prime
  ia[30] = 200; // update the data
});
