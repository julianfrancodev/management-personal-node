import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes';

import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser: true, useCreateIndex:true})
.then(mongoose => console.log("Connected Successfully to Mongo Db"))
.catch(
    err => console.log(err)
)

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({'extended': true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',router);



app.listen(3008,()=>{
    console.log('Server is running on port 3000');
})