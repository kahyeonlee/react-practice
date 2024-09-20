const express = require('express')
const app = express()
const placeRouter = require('./routes/place')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/place',placeRouter)
app.set('port', process.env.PORT||3001)
app.listen(app.get('port'),()=>{
    console.log(`Server is running on ${app.get('port')}`);
})