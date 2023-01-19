import { Pool, ResultSetHeader } from "mysql2/promise";
import User from "../interfaces/users.interfaces";


export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
  this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { name, email } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (name, email) VALUES (?,?)',
      [name, email]
    );
  
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection.execute(
      'SELECT * FROM ProductsApi.users',
      );
    const [rows] = result;
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const result = await this.connection.execute(
      'SELECT * FROM users WHERE id=?',
      [id]
    );
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }

}