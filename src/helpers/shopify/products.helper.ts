import { IImages, IProduct, IVariant } from "../../models/product-lists.mode";
import { IShopifyImages, IShopifyProduct, IShopifyVariants } from "../../models/shopify_models/products.model";

const productVariantHelper = async(variants: IShopifyVariants[]): Promise<IVariant[]> => {
    let variantFiltered: IVariant[] = []
    for(const variant of variants) {
        const filteredVariantData: IVariant = {
            id: variant.id,
            compare_at_price: variant.compare_at_price,
            inventory_item_id: variant.inventory_item_id,
            inventory_quantity: variant.inventory_quantity,
            price: variant.price,
            requires_shipping: variant.requires_shipping,
            title: variant.title
        }

        variantFiltered.push(filteredVariantData)
    }

    return variantFiltered;
};

const imagesHelper = async(images: IShopifyImages[]): Promise<IImages[]> => {
    let imagesFiltered: IImages[] = []
    for(const image of images) {
        const filteredImageData: IImages = {
            src: image.src,
        }

        imagesFiltered.push(filteredImageData)
    }

    return imagesFiltered;
};

export const productHelper = async(products: IShopifyProduct[]): Promise<IProduct[]> => {
    let productFiltered: IProduct[] = []
    for(const product of products) {
        const filteredProductData: IProduct = {
            id: product.id,
            title: product.title,
            created_at: product.created_at,
            status: product.status,
            variants: await productVariantHelper(product.variants),
            images: await imagesHelper(product.images)
        }

        productFiltered.push(filteredProductData);
    }

    return productFiltered;
}