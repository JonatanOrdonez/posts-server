import {Express} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default class ExpressLoader {

  private app: Express;

  constructor(app: Express) {
    this.app = app;    
  }
  
  public init(): void {
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.get('/status', (req, res) => {res.status(200).json({status: 'ok'})});
  }
}