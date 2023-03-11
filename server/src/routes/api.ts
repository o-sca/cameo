import { Router } from "express";
import { AuthController } from "../controllers/auth";
import { BaseRouter } from "./base";

export class ApiRouter extends BaseRouter {
  public constructor() {
    super();
  }

  public open(): Router {
    this.router.post("/signup", new AuthController().postSignUp);

    return this.router;
  }
}
