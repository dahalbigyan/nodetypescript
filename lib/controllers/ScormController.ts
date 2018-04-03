import {Body, JsonController, Get, Put, Req, Res} from "routing-controllers";
import {dataHandler} from "../services/dataservice";

dataHandler();

@JsonController()
export class ScormController{
  constructor(){
  };

  @Get("/statements")
  sayHello(@Req() request: any, @Res() response: any){
    return response.send("Hello from statements get route.");
  };

  @Put("/statements")
  saveDataOnToTheBackend(@Req() request: any, @Res() response: any, @Body() resp: any){
    console.log("Calling from the put route.");
    console.log(resp);
    return response.send("Hello from statements put route.");
  };
}
