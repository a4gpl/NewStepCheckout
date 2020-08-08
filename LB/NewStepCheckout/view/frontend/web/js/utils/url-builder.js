/*eslint-disable */
/* jscs:disable */
define(["jquery", "LB_NewStepCheckout/js/utils/checkout-config"], function (_jquery, _checkoutConfig) {
  var UrlBuilder = /*#__PURE__*/function () {
    "use strict";

    function UrlBuilder() {
      this.method = 'rest';
      this.version = 'V1';
      this.serviceUrl = ':method/:version';
    }

    var _proto = UrlBuilder.prototype;

    /**
     * @inheritdoc
     */
    _proto.createUrl = function createUrl(url) {
      return this.bindParams(this.serviceUrl + url);
    }
    /**
     * Bind params for the url
     *
     * @param url
     */
    ;

    _proto.bindParams = function bindParams(url) {
      var params = {
        method: this.method,
        version: this.version
      };
      var urlParts;
      params.method = this.method;
      params.version = this.version;
      urlParts = url.split('/');
      urlParts = urlParts.filter(Boolean);

      _jquery.each(urlParts, function (key, part) {
        part = part.replace(':', '');

        if (params[part] !== undefined) {
          urlParts[key] = params[part];
        }
      });

      return urlParts.join('/');
    }
    /**
     * Build a add to card url
     * @param productId
     * @param uenc
     */
    ;

    UrlBuilder.createAddToCartUrl = function createAddToCartUrl(productId) {
      return document.location.protocol + "//" + document.location.host + "/checkout/cart/add/uenc/" + _checkoutConfig.getUenc() + "/product/" + productId;
    };

    return UrlBuilder;
  }();

  return UrlBuilder;
});
//# sourceMappingURL=url-builder.js.map