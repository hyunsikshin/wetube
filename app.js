import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router';

const app = express();

const handleListening = () => {
  console.log('hello');
};

const handleAtHome = (req, res) => {
  res.send('hello from home');
};

const handleOther = (req, res) => {
  res.send('other');
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleAtHome);
app.get('/other', handleOther);
app.use('/user', userRouter);

export default app;
