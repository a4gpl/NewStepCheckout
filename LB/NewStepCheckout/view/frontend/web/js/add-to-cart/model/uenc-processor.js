/*eslint-disable */
/* jscs:disable */
define([], function () {
  var UencProcessor = function UencProcessor(url) {
    "use strict";

    var uenc = btoa(url).replace('+/=', '-_,');
    placeholder = placeholder || encodeURI('%uenc%');
    return this;
  };

  return UencProcessor;
});
//# sourceMappingURL=uenc-processor.js.map