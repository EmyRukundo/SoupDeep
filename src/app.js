import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';


const app = express();

const port = process.env.PORT || '5000'

app.listen(port);

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1', indexRouter);

export default app;
