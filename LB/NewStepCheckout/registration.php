<?php
/**
 * @category    LB
 * @package     LB_NewStepCheckout
 * @subpackage  Init
 * @author      Łukasz Borowiec <lukasz.k.borowiec@gmail.com>
 * @since       1.0.0
 */

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    'LB_NewStepCheckout',
    __DIR__
);
