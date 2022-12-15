const express = require('express')
const dbConnect = require('./config/db')
const ShoppingRouter = require("./routes/shopping.routes")
const cors = require('cors');
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => res.send('hello'))
app.use("/shopify" , ShoppingRouter)



app.listen(PORT, async() => {
    await dbConnect();
    console.log('server started on port 8080')}
)