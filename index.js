const express = require('express');
const mongoose = require('mongoose');
const Brandname = require('./model');
const app= express();

app.use(express.json())
mongoose.connect('mongodb+srv://vijayakrishnaalla:1674@first1.gttqspo.mongodb.net/?retryWrites=true&w=majority&appName=first1').then(
    ()=>console.log('db connecetd')
).catch(err => console.log(err))
// app.get('/',(req,res)=>{
//     res.send('<h2>hello world</h2>')
// })
app.post('/addbrands',async (req,res)=>{
    const {brandname} = req.body ;
    try{
        const newData = new Brandname({brandname});
        await newData.save();
        return res.json(await Brandname.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(5500,()=>console.log('server running'))

