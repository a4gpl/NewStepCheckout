/*eslint-disable */
/* jscs:disable */
define(["LB_NewStepCheckout/js/products-list/model/resource-url-manager", "mage/storage", "LB_NewStepCheckout/js/products-list/state/products", "LB_NewStepCheckout/js/utils/promise-deferred"], function (_resourceUrlManager, _storage, _products, _promiseDeferred) {
  var DefaultProcessor = /*#__PURE__*/function () {
    "use strict";

    function DefaultProcessor() {
      this.fetchDeferred = (0, _promiseDeferred)();
      this.resourceUrlManager = new _resourceUrlManager();
    }

    var _proto = DefaultProcessor.prototype;

    /**
     *  Method saves products to the state and returns a promise
     */
    _proto.fetchProducts = function fetchProducts() {
      var fetchDeferred = this.fetchDeferred;
      var serviceUrl = this.resourceUrlManager.fetchProducts();

      if (_products.getInstance().getLazyProducts().length === 0) {
        _storage.get(serviceUrl).done(function (result) {
          _products.getInstance().setLazyProducts(result);

          fetchDeferred.resolve();
        });
      } else {
        fetchDeferred.reject();
      }

      return fetchDeferred.promise;
    };

    return DefaultProcessor;
  }();

  return DefaultProcessor;
});
//# sourceMappingURL=default.js.map