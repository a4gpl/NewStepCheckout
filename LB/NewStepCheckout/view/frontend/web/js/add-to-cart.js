/*eslint-disable */
/* jscs:disable */
define(["knockout", "LB_NewStepCheckout/js/utils/checkout-config", "LB_NewStepCheckout/js/utils/url-builder"], function (_knockout, _checkoutConfig, _urlBuilder) {
  var AddToCart = /*#__PURE__*/function () {
    "use strict";

    function AddToCart(product) {
      this.qtyValue = _knockout.observable(1);
      this.maxQtyValue = _knockout.observable(10);
      this.minQtyValue = _knockout.observable(1);
      this.formKey = _checkoutConfig.getFormKey();
      this.uenc = _checkoutConfig.getUenc();
      this.formUrl = _knockout.observable('');
      this.template = "LB_NewStepCheckout/view/add-to-cart";
      this.product = product;
      this.formUrl(_urlBuilder.createAddToCartUrl(product.id));
    }
    /**
     * Get template.
     *
     * @returns {string}
     */


    var _proto = AddToCart.prototype;

    _proto.getTemplate = function getTemplate() {
      return this.template;
    }
    /**
     * Updates value increased by 1
     */
    ;

    _proto.qtyValueInc = function qtyValueInc() {
      var newValue = this.qtyValue() + 1;

      if (!this.maxQtyValue || this.maxQtyValue && newValue <= this.maxQtyValue()) {
        this.qtyValue(newValue);
      }
    };

    /**
     * Updates value decreased by 1
     */
    _proto.qtyValueDec = function qtyValueDec() {
      var newValue = this.qtyValue() - 1;

      if (newValue >= this.minQtyValue()) {
        this.qtyValue(newValue);
      }
    };

    return AddToCart;
  }();

  return AddToCart;
});
//# sourceMappingURL=add-to-cart.js.map