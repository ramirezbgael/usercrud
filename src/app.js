const express = require('express')
const server = express()
const port = 14
const userRouter = require('./users/users.router')
server.use(express.json())

server.use('/', userRouter)

server.listen(port, () =>{
  console.log(`Server started at port ${port}`)
})