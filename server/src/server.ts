import "dotenv/config";
import path from "path";
import MongoStore from "connect-mongo";
import cors from "cors";
import express, { json } from "express";
import session from "express-session";
import morgan from "morgan";

import { ApiRouter } from "./routes/api";
import { HomeRouter } from "./routes/home";
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
    this.app.use(express.static(path.join(__dirname, "build")));
    this.app.use(cors());
    this.app.use(morgan("combined"));
    this.app.use(json({ limit: '50mb' }));
    this.app.use(session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({ mongoUrl: mongoUrl })
    }));

    this.app.use("/", new HomeRouter().open());
    this.app.use("/api/v1", new ApiRouter().open());
    this.app.use("/*", new CatchRouter().open());
    return this.app;
  }
}
