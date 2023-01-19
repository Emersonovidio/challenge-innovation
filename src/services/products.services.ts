import connection from "../models/connection";
import Product from "../interfaces/products.interfaces";
import ProductModel from "../models/products.model";
import { StatusCodes } from 'http-status-codes';

export default class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();

    return product;
  }

  public async getById(id: number): Promise<Product> {
    const userById =  await this.model.getById(id);
   
    return userById;
  }
  
  
  
}