import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app: Express = express();
app.use(router);

export default app;
