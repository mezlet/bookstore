import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
//import app from './src/server';
import router from './src/routes'

dotenv.config();

const app = express();
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT || 4000;

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
}); 

export default app;
