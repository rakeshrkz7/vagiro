import express, { Request, Response, NextFunction } from 'express';
import { getProducts } from '../services/products.service';

export const testRoute = express.Router();

testRoute.get('/', async(req:Request, res:Response, next: NextFunction) => {
    console.log("Entered into route");
    const dataRes = await getProducts();
    res.json(dataRes);
});



