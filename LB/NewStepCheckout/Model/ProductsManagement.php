<?php
/**
 * @category    LB
 * @package     LB_NewStepCheckout
 * @subpackage  Init
 * @author      Łukasz Borowiec <lukasz.k.borowiec@gmail.com>
 * @since       1.0.0
 */

namespace LB\NewStepCheckout\Model;

use LB\NewStepCheckout\{
    Api\ProductsManagementInterface,
    Enum\CategoryEnum
};
use Magento\{
    Catalog\Api\CategoryRepositoryInterface,
    Catalog\Api\Data\CategoryInterface,
    Catalog\Api\Data\ProductInterface,
    Catalog\Model\Layer,
    Catalog\Model\Layer\Resolver,
    Framework\Exception\LocalizedException
};

/**
 * Class ProductsManagement
 * @package LB\NewStepCheckout\Model
 */
class ProductsManagement implements ProductsManagementInterface
{
    /**
     * @var CategoryRepositoryInterface
     */
    private $categoryRepository;
    /**
     * @var ProductInterface[]
     */
    private $lazyProducts = [];
    /**
     * @var Layer
     */
    private $layer;

    /**
     * ProductsManagement constructor.
     *
     * @param Resolver $layerResolver
     * @param CategoryRepositoryInterface $categoryRepository
     */
    public function __construct(
        Resolver $layerResolver,
        CategoryRepositoryInterface $categoryRepository
    ) {
        $this->layer = $layerResolver->get();
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Fetch products list from hardcoded category
     *
     * @return ProductInterface[]
     */
    public function fetchProducts(): array
    {
        if (empty($this->lazyProducts)) {
            try {
                /** @var CategoryInterface $category */
                $category = $this->categoryRepository->get(CategoryEnum::CATEGORY_ID);
                $this->layer->setCurrentCategory($category);
                foreach ($this->layer->getProductCollection() as $product) {
                    $this->lazyProducts[] = $product;
                }

                return $this->lazyProducts;
            } catch (LocalizedException $exception) {
                return [];
            }
        }
    }
}
