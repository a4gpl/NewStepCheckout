var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'LB_NewStepCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'LB_NewStepCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/model/step-navigator':
            {
                'LB_NewStepCheckout/js/model/step-navigator-mixin': true
            }
        }
    }
};
