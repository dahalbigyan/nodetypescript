import {Body, JsonController, Get, Put, Req, Res, QueryParams} from "routing-controllers";
import {statementDataHandler, activityDataHandler} from "../services/dataservice";


@JsonController()
export class ScormController{
  constructor(){
  };

  @Get("/statements")
  sayHello(@Req() request: any, @Res() response: any){
    return response.send("Hello from statements get route.");
  };

  @Get("/activities/state")
  saveActivityDataToTheBackend(@Req() request: any, @Res() response: any, @QueryParams() queryparams: any){
    activityDataHandler(queryparams);
    console.log("Calling from the activities route.");
  }

  @Put("/statements")
  saveStatementDataToTheBackend(@Req() request: any, @Res() response: any, @Body() resp: any){
    statementDataHandler(resp);
    return response.send("Hello from statements put route.");
  };

};
