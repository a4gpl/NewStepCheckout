import ProductTypesInterface from "./product.types";

export interface ProductStateInterface
{
    /**
     * Set lazy product list
     * @param products
     */
    setLazyProducts(products: any): void

    /**
     * Get lazy product list
     */
    getLazyProducts(): ProductTypesInterface[]
}
