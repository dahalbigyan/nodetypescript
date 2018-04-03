import app from "./app";
import * as bodyParser from "body-parser";

const port = 8000;

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
