import ResourceUrlManager from "../resource-url-manager";
import storage from "mage/storage"
import ProductsState from "../../state/products";
import deferred, {DeferredInterface} from "../../../utils/promise-deferred";

export default class DefaultProcessor
{
    private resourceUrlManager: ResourceUrlManager;
    private fetchDeferred: DeferredInterface = deferred();

    constructor() {
        this.resourceUrlManager = new ResourceUrlManager();
    };

    /**
     *  Method saves products to the state and returns a promise
     */
    fetchProducts() {
        let fetchDeferred = this.fetchDeferred;
        let serviceUrl = this.resourceUrlManager.fetchProducts();

        if (ProductsState.getInstance().getLazyProducts().length === 0) {
            storage.get(serviceUrl).done(function (result: any) {
                ProductsState.getInstance().setLazyProducts(result);
                fetchDeferred.resolve();
            });
        } else {
            fetchDeferred.reject();
        }

        return fetchDeferred.promise;
    }
}
