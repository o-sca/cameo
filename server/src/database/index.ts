import "dotenv/config";
import mysql from "mysql";
import { User } from "./types";

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
      host: process.env["MYSQL_HOST"],
      port: parseInt(process.env["MYSQL_PORT"] ?? "3306"),
      user: process.env["MYSQL_USER"],
      password: process.env["MYSQL_PW"],
      database: process.env["MYSQL_DB"]
    });
  }

  public static get instance(): Database {
    return Database._instance;
  }

  async getUser(username: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      this._pool.query("SELECT user_id, user_name, email, password " +
        "FROM User " +
        "WHERE user_name = ?",
        [username],
        (err, results: User[]) => {
          if (err) reject(err);
          resolve(results[0]);
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
    console.log(matchedUser)
    if (matchedUser) return false;

    const result = await insert();
    if (result) return true;
    return false;
  }
}
