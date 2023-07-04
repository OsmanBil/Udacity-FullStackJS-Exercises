// Require

// working file = index.js
// all functions in util/logger.js are available
const logger = require('./util/logger.js');

// using ES6 object destructuring, only myFirstFunction is available
const { myFirstFunction } = require('./util/logger.js');



// Files
// working file = /app/util/logger.js

console.log(__dirname);
// prints /app/util

console.log(__filename);
// prints /app/util/logger.js


// Timers
// You're likely familiar with setTimeout();, setInterval();, clearInterval(); and clearTimeout(); already; 
// Node.js introduces setImmediate(); and clearImmediate();
// which get's its own phase in the Node.js event loop which we will look at in the event loop lesson.



// console
console.log('Server ready');
console.error('Server failed');



// process

// create conditions for exit code options
// example: 0 typically implies without errors, 1 with.

process.exitCode = 1;

process.on('beforeExit', () => {
  console.log('beforeExit event');
});

process.on('exit', (code) => {
  console.log(`exit event with code: ${code}`);
});


// process.env
console.log(process.env);
// Process.env gives you access to the environment information of your Node.js application. 
// It also allows you to add environment variables that can be used if your code is dependent on 
// the environment it is run in. With the use of a module like dotenv you can easily control your project's 
// configuration in separate .env files based on what environment you are using (ex. production vs test vs development).


// process.argv
// An array containing your console arguments information for your executed process.
// index.js
// When run, will output an array of all arguments supplied to the node process.

console.log(process.argv);
// Terminal
$ node index.js argument1 argument2 
[
  '/usr/local/bin/node',
  '/Users/user/Desktop/app/index.js',
  'argument1',
  'argument2'
]


// process.nextTick
// Allows you to run JavaScript between the different phases of the event loop. process.nextTick will be described in detail when discussing the event loop.