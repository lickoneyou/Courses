"use strict";
class Logger {
    printDate() {
        this.log(new Date());
    }
}
class myLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate() {
        this.printDate();
        this.log('hello');
    }
}
const l = new myLogger();
l.logWithDate();
