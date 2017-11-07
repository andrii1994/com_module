<?php
/**
 * Created by PhpStorm.
 * User: z570
 * Date: 20.04.2016
 * Time: 21:20
 */ 
/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;

$installer->startSetup();

$installer->run("
    ALTER TABLE `{$installer->getTable('catalog/product_option')}` ADD
    `tooltip_text` TEXT AFTER `sort_order`;
");

$installer->endSetup();