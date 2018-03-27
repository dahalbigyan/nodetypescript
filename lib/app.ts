import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import {Container} from "typedi";
import "reflect-metadata"; // this shim is required
import {createExpressServer, useContainer} from "routing-controllers";
import {CategoryController} from "./controllers/CategoryController";
import {PostController} from "./controllers/PostController";

// setup routing-controllers to use typedi container
useContainer(Container);

class App {
  constructor() {
    this.app = createExpressServer({
      controllers: [
        CategoryController,
        PostController
      ]
    });
  }; 
  public app: express.Application
}; 

export default new App().app;
