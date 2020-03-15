const http = require("http");
class kob {
    listen(...args) {
        http
            .createServer((req, res) => {
                this.callback(req, res)
            })
            .listen(...args)
    }
    use(callback) {
        console.log(1)
        this.callback = callback

    }
}

module.exports = kob