define([
    'ko',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator',
    'LB_NewStepCheckout/js/products-list'
], function (ko,Component,_, stepNavigator, ProductsList) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'LB_NewStepCheckout/view/new-step'
        },
        productsList: null,
        isVisible: ko.observable(true),
        /**
         *
         * @returns {*}
         */
        initialize: function () {
            this._super();
            stepNavigator.registerStep(
                'products',
                null,
                'Products',
                this.isVisible,
                _.bind(this.navigate, this),
                5
            );
            this.initProductList();
            return this;
        },

        navigate: function () {
            this.isVisible(true);
        },
        /**
         * @returns void
         */
        navigateToNextStep: function () {
            stepNavigator.next();
        },
        
        initProductList: function () {
            this.productsList = new ProductsList();
        }
    });
    }
);
