import { Router } from "express";
import { BaseRouter } from "./base";
import { HomeController } from "../controllers/home";

export class HomeRouter extends BaseRouter {
  public constructor() {
    super();
  }

  public open(): Router {
    this.router.get("/", new HomeController().getHome);

    return this.router;
  }
}
