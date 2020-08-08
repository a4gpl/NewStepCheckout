/*eslint-disable */
/* jscs:disable */
define(["mageUtils", "LB_NewStepCheckout/js/utils/url-builder"], function (_mageUtils, _urlBuilder) {
  var ResourceUrlManager = /*#__PURE__*/function () {
    "use strict";

    function ResourceUrlManager() {
      this.urlBuilder = new _urlBuilder();
    }

    var _proto = ResourceUrlManager.prototype;

    /**
     * Fetch a url for the rest api
     */
    _proto.fetchProducts = function fetchProducts() {
      return this.getUrl('/checkout/fetchProducts');
    };

    /**
     * Return the created url
     * @param url
     */
    _proto.getUrl = function getUrl(url) {
      if (_mageUtils.isEmpty(url)) {
        return 'Provided service call does not exist.';
      }

      return this.urlBuilder.createUrl(url);
    };

    return ResourceUrlManager;
  }();

  return ResourceUrlManager;
});
//# sourceMappingURL=resource-url-manager.js.map