/*eslint-disable */
/* jscs:disable */

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

define(["Magento_Catalog/js/price-utils", "LB_NewStepCheckout/js/utils/checkout-config"], function (_priceUtils, _checkoutConfig) {
  var Price = /*#__PURE__*/function () {
    "use strict";

    function Price(product) {
      this.template = "LB_NewStepCheckout/view/price";
      this.specialPrice = '';
      this.hasSpecialPrice = false;
      this.product = product;
      this.isSpecialPrice();
    }

    var _proto = Price.prototype;

    _proto.formatPrice = function formatPrice(price) {
      return _priceUtils.formatPrice(price, _checkoutConfig.getBaseFormatPrice());
    };

    _proto.getPrice = function getPrice() {
      var price = this.hasSpecialPrice ? this.specialPrice : this.product.price;
      return this.formatPrice(price);
    };

    _proto.getOldPrice = function getOldPrice() {
      return this.formatPrice(this.product.price);
    };

    _proto.isSpecialPrice = function isSpecialPrice() {
      for (var _iterator = _createForOfIteratorHelperLoose(this.product.custom_attributes), _step; !(_step = _iterator()).done;) {
        var custom_attribute = _step.value;

        // @ts-ignore type from the rest request
        if (custom_attribute.attribute_code == 'special_price') {
          // @ts-ignore type from the rest request
          this.specialPrice = custom_attribute.value;
          this.hasSpecialPrice = true;
          break;
        }
      }
    }
    /**
     * Get template.
     *
     * @returns {string}
     */
    ;

    _proto.getTemplate = function getTemplate() {
      return this.template;
    };

    return Price;
  }();

  return Price;
});
//# sourceMappingURL=price.js.map