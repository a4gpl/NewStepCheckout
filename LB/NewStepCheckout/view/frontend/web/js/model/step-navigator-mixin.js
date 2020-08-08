define(['jquery'], function ($) {
    'use strict';
    
    return function (target) {
        var steps = target.steps;
        
        /**
         * @return {Boolean}
         */
        target.handleHash = function () {
            var hashString = window.location.hash.replace('#', ''),
                isRequestedStepVisible;
            
            if (hashString === '') {
                return false;
            }
            
            if ($.inArray(hashString, this.validCodes) === -1) {
                window.location.href = window.checkoutConfig.pageNotFoundUrl;
                
                return false;
            }
            
            if (hashString !== 'products') {
                isRequestedStepVisible = steps.sort(this.sortItems).some(function (element) {
                    return (element.code == hashString || element.alias == hashString) && element.isVisible(); //eslint-disable-line
                });
                
                //if requested step is visible, then we don't need to load step data from server
                if (isRequestedStepVisible) {
                    return false;
                }
            }
            
            steps().sort(this.sortItems).forEach(function (element) {
                if (element.code == hashString || element.alias == hashString) { //eslint-disable-line eqeqeq
                    element.navigate(element);
                } else {
                    element.isVisible(false);
                }
                
            });
            
            return false;
        };
        
        return target;
    };
});
