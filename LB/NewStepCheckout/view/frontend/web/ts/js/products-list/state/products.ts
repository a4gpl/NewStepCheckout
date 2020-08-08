import {ProductStateInterface} from "../types/state.types";
import ProductTypesInterface from "../types/product.types";

export default class ProductsState implements ProductStateInterface
{
    private static instance: ProductsState;
    private lazyProducts: ProductTypesInterface[] = [];

    /**
     * @inheritdoc
     */
    public setLazyProducts(products: any): void {
        this.lazyProducts = products
    }

    /**
     * @inheritdoc
     */
    public getLazyProducts(): ProductTypesInterface[] {
        return this.lazyProducts
    }

    /**
     * Get state in singleton pattern
     */
    static getInstance(): ProductsState {
        if (!ProductsState.instance) {
            ProductsState.instance = new ProductsState();
        }

        return ProductsState.instance;
    }
}
