define([ 'ko'], function (ko) {
        'use strict';
        
        var mixin = {
            initialize: function () {
                
                console.log('initialize');
                this.isVisible = ko.observable(false);
                this._super();
                this.isVisible = ko.observable(false);
                return this;
            }
        };
        
        return function (target) {
            return target.extend(mixin);
        };
    }
);
