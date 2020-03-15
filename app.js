const kob = require("./kob");
const app = new kob();

app.use((req,res)=>{
    res.writeHead(200)
    res.end('hi')
})

app.listen(3000)