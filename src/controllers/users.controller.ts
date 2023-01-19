import { Request, Response } from 'express';
import UserService from '../services/users.services';
import { StatusCodes } from 'http-status-codes';


export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const createdUser = await this.userService.create(user);

    res.status(200).json(createdUser);
  };

  public getAll = async (_req: Request, res: Response) => {
    const user = await this.userService.getAll();
    res.status(200).json(user);
  };

  
}