
<?php //bestseller
$objectManager = \Magento\Framework\App\ObjectManager::getInstance();   
$productCollection = $objectManager->create('Magento\Reports\Model\ResourceModel\Report\Collection\Factory'); 
$collection = $productCollection->create('Magento\Sales\Model\ResourceModel\Report\Bestsellers\Collection'); ?>

-------

$collection = \Magento\Framework\App\ObjectManager::getInstance()
                ->create('Magento\Catalog\Model\ResourceModel\Product\Collection')
                ->addCategoryFilter($category); 

----------------------------------------------------

$collection = \Magento\Framework\App\ObjectManager::getInstance()
                  ->create('Magento\Catalog\Model\ResourceModel\Product\Collection');
 
\Magento\Framework\App\ObjectManager::getInstance()
 
->create(Magento\Catalog\Model\Product\Visibility’)
 
           ->addVisibleInCatalogFilterToCollection($collection);

-----------------------------------------------------

<?php $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
$product = $objectManager->create('Magento\Catalog\Model\Product')->load($_item->getProduct()->getId());
 echo $product->getThumbnail();
echo  $product->getProductUrl(); ?>




