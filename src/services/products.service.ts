import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../models/product-lists.mode';
import { IShopifyProductList } from '../models/shopify_models/products.model';
import * as productHelper from '../helpers/shopify/products.helper';

// getting all products
export const getProducts = async() : Promise<IProduct[]> => {
    // get some products
    let result: AxiosResponse = await axios.get(`https://vajro-interview.myshopify.com/admin/api/2022-04/products.json`,
    { headers: {"X-Shopify-Access-Token" : "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"} }
    );
    let productList: IShopifyProductList = result.data;
    const filteredProductData: IProduct[] = await productHelper.product(productList.products);
    
    return filteredProductData;
};
