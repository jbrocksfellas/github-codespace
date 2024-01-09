require("dotenv").config()
const http = require("http")

http.createServer((req, res) => {
    res.json({})
})

http.listen(process.env.PORT).then(res => {
    console.log("server started running on ", process.env.PORT)
})