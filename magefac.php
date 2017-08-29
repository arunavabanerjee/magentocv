
<?php

$imagewidth=200;
$imageheight=200;
$imageHelper  = $objectManager->get('\Magento\Catalog\Helper\Image');
$image_url = $imageHelper->init($product, 'product_page_image_small')->setImageFile($product->getFile())->resize($imagewidth, $imageheight)->getUrl();
 echo $image_url


?>


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




