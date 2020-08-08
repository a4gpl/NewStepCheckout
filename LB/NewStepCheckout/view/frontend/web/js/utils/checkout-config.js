/*eslint-disable */
/* jscs:disable */
define([], function () {
  var CheckoutConfig = /*#__PURE__*/function () {
    "use strict";

    function CheckoutConfig() {}

    // @ts-ignore the window.checkoutConfig element exists in the checkout scope

    /**
     *  Return a form key form checkout config
     */
    CheckoutConfig.getFormKey = function getFormKey() {
      // @ts-ignore an element element exists in the checkout scope
      return this.checkoutConfig ? this.checkoutConfig.formKey : '';
    };

    /**
     *  Return a generated product uenc form
     */
    CheckoutConfig.getUenc = function getUenc() {
      // @ts-ignore an element exists in the checkout scope
      return btoa(window.location.href).replace('+/=', '-_,');
    };

    CheckoutConfig.getBaseFormatPrice = function getBaseFormatPrice() {
      // @ts-ignore an element exists in the checkout scope
      return this.checkoutConfig ? this.checkoutConfig.basePriceFormat : {};
    };

    return CheckoutConfig;
  }();

  CheckoutConfig.checkoutConfig = window.checkoutConfig;
  return CheckoutConfig;
});
//# sourceMappingURL=checkout-config.js.map