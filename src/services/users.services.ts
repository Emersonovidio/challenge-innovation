import connection from "../models/connection";
import User from "../interfaces/users.interfaces";
import UserModel from "../models/users.models";

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }
  
  public async getAll(): Promise<User[]> {
    const allUsers = await this.model.getAll();

   return allUsers;
  }

  public async getById ( id: number): Promise<User> {
    const userById =  await this.model.getById(id);
   
    return userById;
  }
 
}