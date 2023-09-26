
//load env vars
require("dotenv").config();

//load dependencies(packages)
const express=require("express"),
app =express(),
port=process.env.PORT,
mongoose=require("mongoose"),
//define router middle ware
expressLayout=require('express-ejs-layouts'),
router=require('./Routes/route1');


//set view engin
app.set('view engine','ejs')
app.use(expressLayout)

app.use('/node_modules' , express.static(__dirname + '/node_modules'));


//connect DB

(async()=>{

await  mongoose.connect(process.env.DB_URI);
const connection=await mongoose.connection;
console.log("ddddddddddd")
connection.on('err', console.error.bind(console,"Connection Failed !"))
connection.once('open',()=>{
    console.log("Connection Created succesfully ")
})

})()


app.use(express.urlencoded({extended:false}))
//set app ROUTES
app.use(router)

//run App(server)
app.listen(port, ()=>{
    console.log(`Server Running correctly on localhost:${port}`)
})
