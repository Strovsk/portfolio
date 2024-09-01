import express, { Express } from 'express';
import { healthCheckRouter } from './routes';

export default class App {
  protected app: Express;

  constructor() {
    this.app = express();

    this.app.use('/healthcheck', healthCheckRouter);
  }
  public start(port: number = 3000) {
    this.app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
}