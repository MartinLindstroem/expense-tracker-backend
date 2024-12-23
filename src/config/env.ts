import dotenv from "dotenv";

let envFile;
process.env.NODE_ENV === "development"
  ? (envFile = ".env.dev")
  : (envFile = ".env.prod");
dotenv.config({ path: envFile });
