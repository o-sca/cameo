import { Response } from "express";
import { CustomRequest } from "./types";

interface JobBody {
  jobTitle: string;
  companyTitle: string;
  currentDate: string;
  // userId: number;
}
export class JobController {

  postJob(req: CustomRequest<JobBody>, res: Response) {
    const { jobTitle, companyTitle, currentDate } = req.body;

    res.json({
      jobTitle: jobTitle,
      companyTitle: companyTitle,
      currentDate: currentDate
    })
    return;
  }
}
