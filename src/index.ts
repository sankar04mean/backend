import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./mongo";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import itemsRouter from "./routes/example-route";
import * as swaggerDocument from "./swagger.json";
import  users from './routes/user.route'
dotenv.config();
const app = express();
const port = process.env.PORT || 3002;
app.use(morgan("tiny"));

connectToMongoDB();

const specs = swaggerJsdoc(swaggerDocument);
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/items", itemsRouter);
app.use('/api/users', users);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  return console.log(
    `Express server is listening at http://localhost:${port} 🚀`
  );
});
