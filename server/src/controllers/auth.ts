import bcrypt from "bcrypt";
import { Database } from "../database";
import { Request, Response } from "express";

interface SignUpBody {
  username: string;
  password: string;
  email: string;
}

interface CustomRequest<T> extends Request {
  body: T
}

export class AuthController {
  private static _saltRounds = 12;
  private static _expireTime = 360000;

  async postSignUp(req: CustomRequest<SignUpBody>, res: Response) {
    const { username, password, email } = req.body;

    const hashedPassword = bcrypt.hashSync(password, AuthController._saltRounds);

    const success = await Database.instance.addUser({ username: username, email: email, password: hashedPassword });

    if (!success) {
      console.error("Not good")
      res.json({})
      return;
    }

    req.session.cookie.maxAge = AuthController._expireTime;

    res.json({
      accessToken: "1"
    });

    return;
  }
}
