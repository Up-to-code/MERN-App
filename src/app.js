//  import Libs   herer
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv  from "dotenv";
dotenv.config()
const port = process.env.PORT || 4001


/// this is  init
const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173/" }));

///  herer  ia app   runed
app.get("/", (req, res) => {
  res.send("<h1>HEllo word  </h1>");
});





//  if you have error 
app.use((req, res, next) => {
  const eror = new Error("unfind " + `${req.originalUrl}`);
  res.state(404);
  next(eror);
});
///  runserver =  run
app.listen(port, () => {
  console.log("app is run "+ port);
});
