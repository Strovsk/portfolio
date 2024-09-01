import express, { Express } from 'express';

export default class App {
  protected app: Express;

  constructor() {
    this.app = express();
  }
  public start(port: number = 3000) {
    this.app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
}