import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { Response, Request, NextFunction, ErrorRequestHandler } from 'express';
import middleware from './middlewares/initial';
import routes from './routes/index';

dotenv.config();

class App {
  public app: express.Application;
  env: string | undefined;

  constructor () {
    this.env = process.env.NODE_ENV || 'development';
    this.app = express();
    this.connectDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.errorHandler();
  }

  private connectDatabase () {
    const dbUrl: string = process.env.DB_URL;
    const dbOptions: object = {
      useNewUrlParser: true,
      createIndexes: true
    };

    try {
      mongoose.connect(dbUrl, dbOptions)
    } catch (error) {
      console.log(error);
    }
  }

  private initializeMiddlewares () {
    middleware(this.app);
  }

  private initializeRoutes () {
    this.app.use('/api/v1', routes);
  }

  private errorHandler () {
    this.app.use(function(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
      console.log(err);
      res.status(500).send('Something broke!');
    });
  }

  public listen () {
    this.app.listen(process.env.PORT, () => {
      console.log(`API IS RUNNING ON PORT ${process.env.PORT}`);
    });
  }

  public getServer () {
    return this.app;
  }
}

export default App;