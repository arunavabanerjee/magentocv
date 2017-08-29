
<?php //bestseller
$objectManager = \Magento\Framework\App\ObjectManager::getInstance();   
$productCollection = $objectManager->create('Magento\Reports\Model\ResourceModel\Report\Collection\Factory'); 
$collection = $productCollection->create('Magento\Sales\Model\ResourceModel\Report\Bestsellers\Collection'); ?>




