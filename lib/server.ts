import app from "./app";
import * as cors from "cors";
const port = 8000;
const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "X-Experience-API-Version", "Authorization", "Access-Control-Allow-Origin"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: `http://localhost:3000`,
  preflightContinue: false
};

app.use(cors(options));
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
