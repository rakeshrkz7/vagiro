import axios, { AxiosResponse } from "axios";
import * as shopInfoHelper from "../helpers/shopify/shop-info.helper";
import { IShopInfo } from "../models/product-lists.mode";

// getting shop info
export const getShopInfo = async() : Promise<IShopInfo> => {
    let result: AxiosResponse = await axios.get(`https://vajro-interview.myshopify.com/admin/api/2022-04/shop.json`,
    { headers: {"X-Shopify-Access-Token" : "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"} }
    );

    return shopInfoHelper.shopInfo(result.data);
    
};