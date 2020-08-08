/*eslint-disable */
/* jscs:disable */
define([], function () {
  var ProductsState = /*#__PURE__*/function () {
    "use strict";

    function ProductsState() {
      this.lazyProducts = [];
    }

    var _proto = ProductsState.prototype;

    /**
     * @inheritdoc
     */
    _proto.setLazyProducts = function setLazyProducts(products) {
      this.lazyProducts = products;
    }
    /**
     * @inheritdoc
     */
    ;

    _proto.getLazyProducts = function getLazyProducts() {
      return this.lazyProducts;
    }
    /**
     * Get state in singleton pattern
     */
    ;

    ProductsState.getInstance = function getInstance() {
      if (!ProductsState.instance) {
        ProductsState.instance = new ProductsState();
      }

      return ProductsState.instance;
    };

    return ProductsState;
  }();

  return ProductsState;
});
//# sourceMappingURL=products.js.map