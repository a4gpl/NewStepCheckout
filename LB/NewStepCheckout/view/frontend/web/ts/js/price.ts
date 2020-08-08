import ProductTypesInterface from "./products-list/types/product.types";
import priceUtils from 'Magento_Catalog/js/price-utils';
import CheckoutConfig from "./utils/checkout-config";

export default class Price
{
    private product: ProductTypesInterface;
    private template: string = "LB_NewStepCheckout/view/price";
    private specialPrice: string = '';
    private hasSpecialPrice: boolean = false;

    constructor(product: ProductTypesInterface) {
        this.product = product;
        this.isSpecialPrice();
    }

    private formatPrice(price: any) {
        return priceUtils.formatPrice(price, CheckoutConfig.getBaseFormatPrice());
    }

    private getPrice() {
        let price = this.hasSpecialPrice ? this.specialPrice : this.product.price;
        return this.formatPrice(price);
    }

    private getOldPrice() {
        return this.formatPrice(this.product.price);
    }

    private isSpecialPrice() {
        for (let custom_attribute of this.product.custom_attributes) {
            // @ts-ignore type from the rest request
            if (custom_attribute.attribute_code == 'special_price') {
                // @ts-ignore type from the rest request
                this.specialPrice = custom_attribute.value;
                this.hasSpecialPrice = true;
                break;
            }
        }
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
