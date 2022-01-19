const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const test ={}
app.use(cors())

app.post("/rendeles", (req, res)=>{
    test["user"]=req.body.user
    console.log(test)
})

console.log(test)

app.listen(8080)