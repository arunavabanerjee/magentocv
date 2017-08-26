
Best thing to do is use a Magento 2 Module or a Theme to include such plugins/libraries. 
It is the recommended way and the best practice.

Method 1 > THEME: If the javascript/jquery library is theme related (In order to change the look and feel of the system).

Place the custom component source file in one of the following location
[theme_dir]/web/js/
Place your requirejs-config.js file in 
[theme_dir]


Method 2 > MODULE: If the javascript/jquery library is related to a particular business function or handles a Magento feature.
It should go inside a module.

Place the custom component source file in one of the following location 
[module_dir]/view/frontend/web/js/
Place your requirejs-config.js file in 
[module_dir]/view/frontend/

--------------------------------------------------------------------------------------------



