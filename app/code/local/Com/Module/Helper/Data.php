<?php

class Com_Module_Helper_Data extends Mage_Core_Helper_Abstract
{
    const DEFAULT_OPTIONS_NUMB = 3;


    public function getOptionsPerTab()
    {
        $optionsNumb = Mage::getStoreConfig('com_module/com_module_group/com_module_optionsnumb', Mage::app()->getStore());
        if (is_numeric($optionsNumb)) {
            return (int) $optionsNumb;
        }
        return self::DEFAULT_OPTIONS_NUMB;
    }
}