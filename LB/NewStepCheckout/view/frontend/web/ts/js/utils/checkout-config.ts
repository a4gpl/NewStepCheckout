export default class CheckoutConfig
{
    // @ts-ignore the window.checkoutConfig element exists in the checkout scope
    static checkoutConfig: object = window.checkoutConfig;

    /**
     *  Return a form key form checkout config
     */
    static getFormKey(): string  {
        // @ts-ignore an element element exists in the checkout scope
        return this.checkoutConfig ? this.checkoutConfig.formKey : '';
    };

    /**
     *  Return a generated product uenc form
     */
    static getUenc(): string  {
        // @ts-ignore an element exists in the checkout scope
        return btoa(window.location.href).replace('+/=', '-_,');
    }

    static getBaseFormatPrice(): object {
        // @ts-ignore an element exists in the checkout scope
        return this.checkoutConfig ? this.checkoutConfig.basePriceFormat : {};
    }
}
