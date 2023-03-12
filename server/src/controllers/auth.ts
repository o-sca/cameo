import bcrypt from "bcrypt";
import { Database } from "../database";
import { CustomRequest } from "./types";
import { Request, Response } from "express";

interface AuthBody {
  username: string;
  password: string;
}

interface SignUpBody extends AuthBody {
  email: string;
}

export class AuthController {
  private static _saltRounds = 12;
  private static _expireTime = 360000;

  async postSignUp(req: CustomRequest<SignUpBody>, res: Response) {
    const { username, password, email } = req.body;

    const hashedPassword = bcrypt.hashSync(password, AuthController._saltRounds);

    const success = await Database.instance.addUser({ username: username, email: email, password: hashedPassword });

    if (!success) {
      res.json({
        authenticated: false,
        username: "",
        userId: ""
      })
      return;
    }

    const userInfo = await Database.instance.getUser(username)
    req.session.cookie.maxAge = AuthController._expireTime;
    req.session.authenticated = true;
    req.session.username = username;

    res.status(201).json({
      authenticated: true,
      username: username,
      userId: userInfo?.user_id
    });

    return;
  }

  async postLogin(req: CustomRequest<AuthBody>, res: Response) {
    const { username, password } = req.body;

    const matchedCredential = await Database.instance.getUser(username);

    if (matchedCredential) {
      if (bcrypt.compareSync(password, matchedCredential.password)) {
        req.session.cookie.maxAge = AuthController._expireTime
        req.session.authenticated = true;
        req.session.username = username;

        const userInfo = await Database.instance.getUser(username)

        res.json({
          status: "success",
          authenticated: true,
          user_id: userInfo?.user_id
        })
        return;
      }
    }
    res.json({
      status: "failed",
      authenticated: false,
      user_id: ""
    })
    return;
  }

  getAuth(req: Request, res: Response) {
    res.json({ authenticated: req.session.authenticated });
  }
}
