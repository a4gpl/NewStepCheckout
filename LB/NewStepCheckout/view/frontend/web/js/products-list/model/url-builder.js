/*eslint-disable */
/* jscs:disable */
define(["jquery"], function (_jquery) {
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
    };

    return UrlBuilder;
  }();

  return UrlBuilder;
});
//# sourceMappingURL=url-builder.js.map