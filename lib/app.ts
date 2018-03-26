import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

class App {

  constructor() {
    this.app = express();
    this.configureExpress();
    this.mountRoutes();
  }

  public app: express.Application;

  private configureExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World!'
      })
    });

    router.post('/', (req: Request, res: Response) => {
      const data = req.body;
      // query a database and save data
      res.status(200).send(data);
    });

    this.app.use('/', router)

  }

}

export default new App().app;
