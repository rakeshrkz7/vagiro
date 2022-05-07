export interface IShopifyVariants {
    id: number;
    product_id: number;
    title: string;
    price: string;
    sku: string | null;
    position: number;
    inventory_policy: string;
    compare_at_price: string;
    fulfillment_service: string;
    inventory_management: string;
    option1: string;
    option2: string | null;
    option3: string | null;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: string | null;
    grams: number;
    image_id: string | null;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: boolean;
    admin_graphql_api_id: string
}

export interface IShopifyOptions {
    id: number;
    product_id: number;
    name: string;
    position: number;
    values: []
}

export interface IShopifyImages {
    id: number;
    product_id: number;
    position: number;
    created_at: string;
    updated_at: string;
    alt: string;
    width: number;
    height: number;
    src: string;
    variant_ids: [];
    admin_graphql_api_id: string
}

export interface IShopifyProduct{
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: string | null;
    status: string;
    published_scope: string;
    tags: string;
    admin_graphql_api_id: string;
    variants: IShopifyVariants[];
    options: IShopifyOptions[];
    images: IShopifyImages[]
    image: IShopifyImages
}

export interface IShopifyProductList {
    products: IShopifyProduct[];
}