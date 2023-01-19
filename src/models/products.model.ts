import { Pool, ResultSetHeader } from "mysql2/promise";
import Product from '../interfaces/products.interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, category, status, quantity } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO products (name, category, status, quantity) VALUES (?,?,?,?)',
      [name, category, status, quantity]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection.execute("SELECT * FROM products");
    const [rows] = result;
    return rows as Product[];
  }
  public async getById(id: number): Promise<Product> {
    const result = await this.connection.execute(
      'SELECT * FROM products WHERE id=?',
      [id]
    );
    const [rows] = result;
    const [user] = rows as Product[];
    return user;
  }

}
