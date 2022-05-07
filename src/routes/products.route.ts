import express, { Request, Response, NextFunction } from 'express';
import * as productService from '../services/products.service';

export const productRoute = express.Router();

productRoute.get('/', async(req:Request, res:Response, next: NextFunction) => {
    console.log('API to get the products list');
    const dataRes = await productService.getProducts();
    res.json(dataRes);
});



