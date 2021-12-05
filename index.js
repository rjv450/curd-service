import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './server/route.js';

const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', Routes);

app.get('/',(req,res)=>{
    res.send("iugdeug");
})
const URL = 'mongodb://user:rmijoessi01@cluster0-shard-00-00.cu5yb.mongodb.net:27017,cluster0-shard-00-01.cu5yb.mongodb.net:27017,cluster0-shard-00-02.cu5yb.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-lmga9w-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || '8080'; 


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
     
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})


