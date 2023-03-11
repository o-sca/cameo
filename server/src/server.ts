import "dotenv/config";
import MongoStore from "connect-mongo";
import cors from "cors";
import express, { urlencoded, json } from "express";
import session from "express-session";
import morgan from "morgan";

import { ApiRouter } from "./routes/api";
import { CatchRouter } from "./routes/catch";


export class ServerInstance {
  private static _instance: ServerInstance = new ServerInstance();
  public app: express.Application;

  private constructor() {
    if (ServerInstance._instance) {
      throw new Error("Singleton class")
    }

    ServerInstance._instance = this;
    this.app = express();
  }

  public static get instance(): ServerInstance {
    return this._instance;
  }

  public create(mongoUrl: string): express.Application {
    this.app.use(cors());
    this.app.use(morgan("combined"));
    this.app.use(json({ limit: '50mb' }));
    this.app.use(urlencoded({ limit: "50mb", extended: true, parameterLimit: 500000 }));
    this.app.use(session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({ mongoUrl: mongoUrl })
    }));

    this.app.use("/api/v1", new ApiRouter().open());
    this.app.use("/*", new CatchRouter().open());
    //this.app.use("/webhook/", createWebhookRouter());
    return this.app;
  }
}
