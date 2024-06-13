//crear un worker
const myWorker = new Worker('/worker.js');

myWorker.onmessage = function(e){
    console.log('Worker said:', e.data);
}

myWorker.postMessage('Hello worker, you have to work!');
myWorker.postMessage('Another message');





