const EventEmitter = require('events');

class Logger extends EventEmitter{


    log(message){
        console.log(message);

        this.emit(message, {data:'some data here', url: 'http://data.com'})
    }
}

module.exports = Logger