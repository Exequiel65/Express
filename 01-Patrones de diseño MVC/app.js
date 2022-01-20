const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 3000


app.use(express.static('./public'))

// ROUTERS
let mainRouter = require('./routers/main')
app.use('/', mainRouter)

app.listen(PORT, () =>{
    console.log(`Servido levantado en http://localhost:${PORT}`)
})