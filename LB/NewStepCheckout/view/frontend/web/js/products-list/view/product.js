/*eslint-disable */
/* jscs:disable */
define(["LB_NewStepCheckout/js/add-to-cart", "LB_NewStepCheckout/js/price"], function (_addToCart, _price) {
  var ProductView = /*#__PURE__*/function () {
    "use strict";

    function ProductView(product) {
      this.template = "LB_NewStepCheckout/view/products-list/product";
      this.product = product;
      this.addToCart = new _addToCart(product);
      this.price = new _price(product);
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