import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import {Container} from "typedi";
import "reflect-metadata"; // this shim is required
import {createExpressServer, useContainer} from "routing-controllers";
import {CategoryController} from "./controllers/CategoryController";
import {PostController} from "./controllers/PostController";
import {ScormController} from "./controllers/ScormController";

// setup routing-controllers to use typedi container
useContainer(Container);

class App {
  constructor() {
    this.app = createExpressServer({
      cors: true,
      controllers: [
        CategoryController,
        PostController,
        ScormController
      ]
    });
  };
  public app: express.Application
};

export default new App().app;
