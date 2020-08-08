import mageUtils from "mageUtils";
import UrlBuilder from "../../utils/url-builder";

export default class ResourceUrlManager
{
    private urlBuilder: UrlBuilder;

    constructor() {
        this.urlBuilder = new UrlBuilder();
    };

    /**
     * Fetch a url for the rest api
     */
    public fetchProducts(): string {
        return this.getUrl('/checkout/fetchProducts');
    };

    /**
     * Return the created url
     * @param url
     */
    private getUrl(url: string): string  {
        if (mageUtils.isEmpty(url)) {
            return 'Provided service call does not exist.';
        }
        return this.urlBuilder.createUrl(url);
    }

}
