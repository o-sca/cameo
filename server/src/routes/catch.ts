import { Request, Response, Router } from "express";
import { BaseRouter } from "./base";

export class CatchRouter extends BaseRouter {
  public constructor() {
    super();
  }

  public open(): Router {
    this.router.use("*", (_req: Request, res: Response) => {
      return res.status(500).send("Internal Server Error");
    })
    return this.router;
  }
}
