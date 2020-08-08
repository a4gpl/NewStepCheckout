import ProductTypesInterface from "./add-to-cart/types/product.types";
import ko from "knockout";
import CheckoutConfig from './utils/checkout-config';
import UrlBuilder from "./utils/url-builder";

export default class AddToCart
{
    private product: ProductTypesInterface;
    private qtyValue: KnockoutObservable<number> = ko.observable(1);
    private maxQtyValue: KnockoutObservable<number> = ko.observable(10);
    private minQtyValue: KnockoutObservable<number> = ko.observable(1);
    private formKey: string = CheckoutConfig.getFormKey();
    private uenc: string = CheckoutConfig.getUenc();
    private formUrl: KnockoutObservable<string> = ko.observable('');
    private template: string = "LB_NewStepCheckout/view/add-to-cart";

    constructor(product: ProductTypesInterface) {
        this.product = product;
        this.formUrl(UrlBuilder.createAddToCartUrl(product.id));
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

    /**
     * Updates value increased by 1
     */
    private qtyValueInc()
    {
        let newValue = this.qtyValue() + 1;

        if (!this.maxQtyValue || (this.maxQtyValue && newValue <= this.maxQtyValue())) {
            this.qtyValue(newValue);
        }
    };

    /**
     * Updates value decreased by 1
     */
    private qtyValueDec()
    {
        let newValue = this.qtyValue() - 1;
        if (newValue >= this.minQtyValue()) {
            this.qtyValue(newValue);
        }
    };
}
