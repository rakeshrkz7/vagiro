import { IShopifyImages } from "./shopify_models/products.model";

export interface IShopInfo {
    name: string;
    domain: string;
}

export interface IVariant {
    id: number;
    title: string;
    price: string;
    compare_at_price: string;
    inventory_item_id: number;
    inventory_quantity: number;
    requires_shipping: boolean;
}

export interface IProduct {
    id: number;
    title: string;
    created_at: string;
    status: string;
    variants: IVariant[];
    images: IImages[];
}

export interface IImages {
    src: string;
}

export interface IProductList {
    shop_info: IShopInfo;
    product_count: number;
    products: IProduct[];
}