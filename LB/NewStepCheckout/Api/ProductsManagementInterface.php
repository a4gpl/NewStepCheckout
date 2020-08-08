<?php
/**
 * @category    LB
 * @package     LB_NewStepCheckout
 * @subpackage  Init
 * @author      Łukasz Borowiec <lukasz.k.borowiec@gmail.com>
 * @since       1.0.0
 */
namespace LB\NewStepCheckout\Api;

use Magento\Catalog\Api\Data\ProductInterface;

/**
 * Interface ProductManagementInterface
 * @package LB\NewStepCheckout\Api
 */
interface ProductsManagementInterface
{
    /**
     * Fetch product list from hardcoded category
     * @return ProductInterface[]
     */
    public function fetchProducts(): array;
}
