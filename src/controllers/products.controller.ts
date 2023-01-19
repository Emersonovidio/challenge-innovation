import { Request, Response } from "express";
import ProductService from "../services/products.services";
import { StatusCodes } from 'http-status-codes';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productService.create(product);

    res.status(200).json(createdProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const product = await this.productService.getAll();
    res.status(200).json(product);
  };

  
}