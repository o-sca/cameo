import "dotenv/config";
import mysql, { RowDataPacket } from "mysql2";
import { Job, User } from "./types";

export class Database {
  private _pool: mysql.Pool;
  private static _instance: Database = new Database();

  private constructor() {
    if (Database._instance) {
      throw new Error("Singleton Error")
    }
    Database._instance = this;
    this._pool = mysql.createPool({
      connectionLimit: 10,
      waitForConnections: true,
      host: process.env["MYSQL_HOST"],
      port: parseInt(process.env["MYSQL_PORT"] ?? "3306"),
      user: process.env["MYSQL_USER"],
      password: process.env["MYSQL_PW"],
      database: process.env["MYSQL_DB"]
    });
    console.log(this._pool.config)
  }

  public static get instance(): Database {
    return Database._instance;
  }

  async getUser(username: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this._pool.query("SELECT user_id, user_name, email, password " +
        "FROM User " +
        "WHERE user_name = ?",
        [username],
        (err, results: RowDataPacket[]) => {
          if (err) reject(err);
          resolve(results && results.length > 0 ? results[0] as User : null);
        })
    })
  }

  async addUser({
    email,
    username,
    password
  }: {
    email: string,
    username: string,
    password: string
  }) {
    const insert = () => {
      return new Promise((resolve, reject) => {
        this._pool.query(
          "INSERT INTO User (email, user_name, password) VALUES (?, ?, ?)",
          [email, username, password],
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        )
      })
    };

    const matchedUser = await this.getUser(username);
    if (matchedUser) return false;

    const result = await insert();
    if (result) return true;
    return false;
  }


  async addJob({
    userId,
    jobTitle,
    jobUrl,
    companyTitle,
    currentDate
  }: {
    userId: number;
    jobTitle: string;
    jobUrl: string;
    companyTitle: string;
    currentDate: string;
  }) {
    return new Promise((resolve, reject) => {
      this._pool.query(
        "INSERT INTO Jobs (user_id, job_title, url, company_name, date_posted) VALUES (?, ?, ?, ?, ?)",
        [userId, jobTitle, jobUrl, companyTitle, currentDate],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      )
    })
  }

  async getJobsById(userId: number): Promise<Job[] | undefined> {
    return new Promise((resolve, reject) => {
      this._pool.query(
        "SELECT * FROM Jobs WHERE user_id = ?",
        [userId],
        (err, result: RowDataPacket[]) => {
          if (err) reject(err);
          resolve(result as Job[]);
        }
      )
    })
  }

}
