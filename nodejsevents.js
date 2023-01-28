const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFall', () => {
  console.log('PLease turn off the water motter!');
  setTimeout(()=>{
console.log('off the water motter!It is an gental reminder');
  },3000)
});
myEmitter.emit('waterFall');