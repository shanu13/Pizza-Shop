const express = require('express');
const app = express()
const expressLayout = require('express-ejs-layouts')
const path = require('path');


app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'));

// app.use(expressLayout);


app.get('/',(req,res)=> {
    res.render('home')
})


const port = process.env.PORT || 3000
app.listen(port,()=> {  
    console.log('server connected')
})