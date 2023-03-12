import { Router } from "express";
import { AuthController } from "../controllers/auth";
import { JobController } from "../controllers/job";
import { BaseRouter } from "./base";

export class ApiRouter extends BaseRouter {
  private auth: AuthController;
  private job: JobController;
  public constructor() {
    super();
    this.auth = new AuthController();
    this.job = new JobController();
  }

  public open(): Router {
    this.router.post("/signup", this.auth.postSignUp);
    this.router.post("/signin", this.auth.postLogin);

    this.router.post("/job", this.job.postJob);
    this.router.post("/alljobs", this.job.getJobById);

    this.router.get("/auth", this.auth.getAuth);

    return this.router;
  }
}
