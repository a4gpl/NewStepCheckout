import ProductTypesInterface from "../types/product.types";
import AddToCart from '../../add-to-cart'
import Price from "../../price";

export default class ProductView
{
    public product: ProductTypesInterface;
    public addToCart : AddToCart;
    public price : Price;

    public template: string = "LB_NewStepCheckout/view/products-list/product";

    constructor(product: ProductTypesInterface) {
        this.product = product;
        this.addToCart = new AddToCart(product);
        this.price = new Price(product);
    }

    /**
     * Get template.
     *
     * @returns {string}
     */
    public getTemplate()
    {
        return this.template;
    }
}
