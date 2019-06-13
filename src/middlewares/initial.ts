import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Application } from 'express';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default (app: Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (isDev) {
    app.use(morgan('dev'));
  }

  if (isProd) {
    app.use(morgan('combined'));
  }
}