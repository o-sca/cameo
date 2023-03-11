import { Router } from "express";

export abstract class BaseRouter {
  router: Router;

  public constructor() {
    this.router = Router();
  }

  abstract open(): Router;
}
