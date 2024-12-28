const express=require('express');
const app=express();
const mongoose = require ('mongoose'); 
const cors=require('cors');
const routerurl=require('./router/router')


app.use(express.json());
app.use(cors());
app.use("/app",routerurl);



if(mongoose.connect("mongodb+srv://Hari9500:9500Hari@cluster0.0347o.mongodb.net/usermanage?retryWrites=true&w=majority&appName=Cluster0"))
    {
        console.log('database is connected')
    }




app.listen(4000,()=>
{
    console.log('server is running on the port 4000')
})