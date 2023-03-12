import { Response } from "express";
import { Database } from "../database";
import { CustomRequest } from "./types";

interface JobBody {
  jobTitle: string;
  jobUrl: string;
  companyTitle: string;
  currentDate: string;
  userId: number;
}
export class JobController {

  async postJob(req: CustomRequest<JobBody>, res: Response) {
    const { jobTitle, jobUrl, userId, companyTitle, currentDate } = req.body;

    const response = await Database.instance.addJob({
      userId: userId,
      jobTitle: jobTitle,
      jobUrl: jobUrl,
      companyTitle: companyTitle,
      currentDate: currentDate
    })

    if (!response) {
      res.json({ status: "failed" });
      return;
    }
    res.json({ status: "success" });
    return;
  }

  async getJobById(req: CustomRequest<{ userId: number }>, res: Response) {
    const { userId } = req.body;

    const response = await Database.instance.getJobsById(userId);

    if (!response) {
      res.json({ status: "failed", data: [] });
      return;
    }
    res.json({ status: "success", data: response });
    return;
  }
}
