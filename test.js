// const EventEmitter = require('events');
// const emitter = new EventEmitter();

const Logger = require('./test2');
const logger = new Logger();



logger.on('logging',(e)=>{
    console.log(e)
})

logger.log('logging')

