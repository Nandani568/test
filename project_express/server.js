const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    console.log('Here')
    
    
    res.render('index', { text: "World" })
})
app.get('/users', (req,res) => {
    res.send("user is available")
})
app.get('/users/new', (req, res) => {
    res.send("new")

})
app.listen(3000)