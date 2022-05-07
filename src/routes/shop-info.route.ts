import express, { Request, Response, NextFunction } from 'express';
import * as shopInfoService from '../services/shop-info.service';

export const shopInfoRoute = express.Router();

shopInfoRoute.get('/', async(req:Request, res:Response, next: NextFunction) => {
    console.log('API to get the shop info detail');
    const dataRes = await shopInfoService.getShopInfo();
    res.json(dataRes);
});



