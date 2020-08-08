/*eslint-disable */
/* jscs:disable */
define(["LB_NewStepCheckout/js/add-to-cart"], function (_addToCart) {
  var ProductView = /*#__PURE__*/function () {
    "use strict";

    function ProductView(product) {
      this.template = "LB_NewStepCheckout/view/products-list/product";
      this.product = product;
      this.addToCart = new _addToCart(product);
    }
    /**
     * Get template.
     *
     * @returns {string}
     */


    var _proto = ProductView.prototype;

    _proto.getTemplate = function getTemplate() {
      return this.template;
    };

    return ProductView;
  }();

  return ProductView;
});
//# sourceMappingURL=product.js.map