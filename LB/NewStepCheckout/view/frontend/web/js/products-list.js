/*eslint-disable */
/* jscs:disable */

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

define(["LB_NewStepCheckout/js/products-list/model/processor/default", "LB_NewStepCheckout/js/products-list/state/products", "knockout", "LB_NewStepCheckout/js/products-list/view/product"], function (_default, _products, _knockout, _product) {
  var ProductsList = /*#__PURE__*/function () {
    "use strict";

    function ProductsList() {
      var _this = this;

      this.productsSection = _knockout.observableArray([]);
      this.template = "LB_NewStepCheckout/view/products-list";
      this.defaultProcessor = new _default();
      this.defaultProcessor.fetchProducts().then(function () {
        _this.populateProducts();
      });
    }
    /**
     * Populate products to the Observable section
     */


    var _proto = ProductsList.prototype;

    _proto.populateProducts = function populateProducts() {
      // @ts-ignore The knockoutObservableArray has a [Symbol.iterator]() method
      for (var _iterator = _createForOfIteratorHelperLoose(_products.getInstance().getLazyProducts()), _step; !(_step = _iterator()).done;) {
        var product = _step.value;
        this.productsSection.push(new _product(product));
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

    return ProductsList;
  }();

  return ProductsList;
});
//# sourceMappingURL=products-list.js.map