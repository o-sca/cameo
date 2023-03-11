import "dotenv/config";
import http from "http";
import { Database } from "./database";
import { ServerInstance } from "./server";

type Env = {
  port: string;
  mongoUrl: string;
};

const loadEnv = (): Env => {
  const port = process.env["PORT"];
  const mongoUrl = process.env["MONGO_URL"];
  if (!port || !mongoUrl) throw new Error("Missing env values");
  return { port: port, mongoUrl: mongoUrl };
}

(() => {
  const env = loadEnv();
  Database.instance;
  const serverInstance = ServerInstance.instance.create(env.mongoUrl);
  const server = http.createServer(serverInstance);
  server.listen(env.port, () => {
    console.log("Serving on:", server.address());
  });
})();
