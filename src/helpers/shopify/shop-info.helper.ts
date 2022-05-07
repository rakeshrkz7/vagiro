import { IImages, IShopInfo } from "../../models/product-lists.mode";
import { IShopifyImages } from "../../models/shopify_models/products.model";
import { IShopifyShopInfo } from "../../models/shopify_models/shop-info.nodel";

export const shopInfo = async(shopInfo: IShopifyShopInfo): Promise<IShopInfo> => {
    const filteredShopInfoData: IShopInfo = {
        name: shopInfo.shop.name,
        domain: shopInfo.shop.domain
    }

    return filteredShopInfoData;
};
