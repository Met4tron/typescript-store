process.env['NODE_CONFIG_DIR'] = `${__dirname}/config`
import express from 'express';
import dotenv from 'dotenv';
import middleware from './middlewares/initial';

dotenv.config();

const app = express();
middleware(app);

export default app;