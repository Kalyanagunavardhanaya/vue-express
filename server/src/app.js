const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 8081

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.post('/register',(req,res)=>{
    res.send({"msg":`\nYou have reached register endpoint : ${req.body.email}`})
})

app.listen(port,()=>console.log(`Server running on port ${port}`))
