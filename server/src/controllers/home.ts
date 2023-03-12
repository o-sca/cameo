import { Request, Response } from "express";
import path from "path";

export class HomeController {
  private static root = path.join(__dirname, "..", "build");

  getHome(_req: Request, res: Response) {
    res.sendFile(HomeController.root, "index.html");
    return;
  }
}
