import express from 'express';
import { router } from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://postman:jonas@cluster0.ddncs.mongodb.net/posts?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

const app = express();

app.use(express.json());
app.use(router);
app.use(function(err, req, res, next) {
  res.status(400).json({error:true, message:'Algo deu Errado!'});
});



export { app }