import DefaultProcessor from "./products-list/model/processor/default";
import ProductsState from "./products-list/state/products";
import ko from "knockout";
import ProductView from "./products-list/view/product";

export default class ProductsList
{
    public productsSection: KnockoutObservableArray<ProductView> = ko.observableArray([]);
    public template: string = "LB_NewStepCheckout/view/products-list";
    private defaultProcessor: DefaultProcessor;

    constructor() {
        this.defaultProcessor = new DefaultProcessor();
        this.defaultProcessor
            .fetchProducts()
            .then(() => {
                this.populateProducts();
        });
    }

    /**
     * Populate products to the Observable section
     */
    private populateProducts() {
        // @ts-ignore The knockoutObservableArray has a [Symbol.iterator]() method
        for (let product of ProductsState.getInstance().getLazyProducts()) {
            this.productsSection.push(new ProductView(
                product
            ))
        }
    }

    /**
     * Get template.
     *
     * @returns {string}
     */
    public getTemplate() {
        return this.template;
    }
}
