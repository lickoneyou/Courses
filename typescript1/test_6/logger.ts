abstract class Logger {
  abstract log(message: Date | string): void

  printDate() {
    this.log(new Date())
  }
}

class myLogger extends Logger {
  log(message: Date | string): void {
    console.log(message)
  }

  logWithDate() {
    this.printDate()
    this.log('hello')
  }
}

const l = new myLogger()
l.logWithDate()
