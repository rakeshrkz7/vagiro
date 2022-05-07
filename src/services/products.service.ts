import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { IProduct, IProductList } from '../models/product-lists.mode';
import { IShopifyProduct, IShopifyProductList } from '../models/shopify_models/products.model';
import { productHelper } from '../helpers/shopify/products.helper';

// getting all products
export const getProducts = async() : Promise<IProduct[]> => {
    // get some products
    console.log("Entered into service");
    let result: AxiosResponse = await axios.get(`https://vajro-interview.myshopify.com/admin/api/2022-04/products.json`,
    { headers: {"X-Shopify-Access-Token" : "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"} }
    );
    let productList: IShopifyProductList = result.data;
    const filteredProductData: IProduct[] = await productHelper(productList.products);
    
    return filteredProductData;
};