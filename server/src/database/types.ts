export interface User {
  user_id: number;
  user_name: string;
  password: string;
  email: string;
}

export interface Job {
  user_id: number;
  job_title: string;
  url: string;
  company_name: string;
  date_posted: string;
  date_applied: string;
  status: string;
}
