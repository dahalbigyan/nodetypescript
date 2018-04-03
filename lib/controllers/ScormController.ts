import {JsonController, Get, Put, Req, Res} from "routing-controllers";

@JsonController()
export class ScormController{
  constructor(){
  };

  @Get("/statements")
  sayHello(@Req() request: any, @Res() response: any){
    return response.send("Hello from statements get route.");
  };

  @Put("/statements")
  saveDataOnToTheBackend(@Req() request: any, @Res() response: any){
    console.log("Calling from the put route.");
    return response.send("Hello from statements put route.");
  };
}
