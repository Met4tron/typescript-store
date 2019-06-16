import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { Application } from 'express';

export default (app: Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
  }

  if (process.env.NODE_ENV == 'production') {
    app.use(morgan('combined'));
  }
}