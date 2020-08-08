import $ from "jquery";
import ParamInterface from "../types/param.types";
import CheckoutConfig from "./checkout-config";

export default class UrlBuilder
{
    private method: string = 'rest';
    private version: string = 'V1';
    private serviceUrl: string = ':method/:version';

    /**
     * @inheritdoc
     */
    public createUrl(url: string): string {
        return this.bindParams(this.serviceUrl + url);
    }

    /**
     * Bind params for the url
     *
     * @param url
     */
    private bindParams(url: string): string {
        let params: ParamInterface = {
            method: this.method,
            version: this.version,
        };
        let urlParts;

        params.method = this.method;
        params.version = this.version;

        urlParts = url.split('/');
        urlParts = urlParts.filter(Boolean);

        $.each(urlParts, function (key, part) {
            part = part.replace(':', '');

            if (params[part] !== undefined) {
                urlParts[key] = params[part];
            }
        });

        return urlParts.join('/');
    }

    /**
     * Build a add to card url
     * @param productId
     * @param uenc
     */
    static createAddToCartUrl(productId: number) {
        return `${document.location.protocol}//${document.location.host}/checkout/cart/add/uenc/${CheckoutConfig.getUenc()}/product/${productId}`;
    }
}
