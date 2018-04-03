import {Body, JsonController, Get, Put, Req, Res} from "routing-controllers";
import {dataHandler} from "../services/dataservice";


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
    dataHandler(resp);
    return response.send("Hello from statements put route.");
  };
}
