# Shared memory and atomics

ES8 has introduced a SharedArrayBuffer constructor and global object Atomics with their helper functions.
Javascript runs in a single thread but you can perform tasks asynchronously. JS engine runs those tasks in separate threads and later fed their result back into main thread using callbacks or you can use web workers which are heavyweight processes with its own global environment and nothing is shared by default and then SIMD(single instruction multiple data) was introduced for a low-level data parallelism.
SharedArrayBuffer and Atomics are introduced to achieve high-level parallelism. SharedArrayBuffer object is shared between multiple workers and main thread so you can share data quickly and easily and coordination between shared data is simple.

```js
// main.js
const worker = new Worker("worker.js");
const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 100); // 100 primes shared memory
worker.postMessage({ sharedBuffer });
// worker.js
self.addEventListener("message", function(event) {
  const { sharedBuffer } = event.data;
  const ia = new Int32Array(sharedBuffer);
});
```

Now you can use the same shared object in any number of worker you want and you can manipulate the shared memory buffer as following.

```js
// main.js
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
```

It will update the shared buffer but it’s hard to know how long it will take for a write to appear from one worker to another(it’s system dependent).
Thus, to achieve synchronization atomic operations are used. A new global object Atomics provides several atomic ops as static methods. Atomics are used for the synchronization(load and store method), waiting(wait and wake method) and other arithmetic atomic operations(add, submethods). Atomics operations (load, store, and others) ensure that the reading and writing is done safely.
