import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
class App {
  constructor() {
    this.app = createExpressServer({
      controllers: []
    });
  }; 
  public app: express.Application
}; 

export default new App().app;
