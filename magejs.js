
var config = {
    paths: {
        "jQuery1.11.1": "js/jquery",
        "jQueryNC":  "js/jquery1.11.1-noconflict",
        "bootstrapJS": "js/bootstrap.min",
        "jQuery1.9.1": "js/jquery-1.9.1.min",
        "jQuery191NC": "js/jquery1.9.1-noconflict"
    },
    shim:{
        "bootstrapJS": {
           deps: ["jQuery191NC"]
        }
    }
};

<script>
 require(["jQuery191NC", "bootstrapJS"], function(jQuery){
   (function ($) {
       jQuery('.carousel').carousel({
          interval: 5000 //changes the speed
       });
   })(jQuery);
 });
</script>



var config = {
    paths: {
            'flexslider': 'Vendor_Modulejs/jquery.flexslider-min',
            'picturefill': 'Vendor_Modulejs/picturefill.min',
            'easing': 'Vendor_Modulejs/jquery.easing.1.3',
            'hoverintent': 'Vendor_Modulejs/jquery.hoverIntent',
            'fitvids': 'Vendor_Modulejs/jquery.fitvids',
            'vimeo': 'Vendor_Modulejs/jquery.vimeo.api.min'
    },
    shim: {
            'flexslider': {
                deps: ['jquery']
            },
            'picturefill': {
                deps: ['jquery']
            },
            'easing': {
                deps: ['jquery']
            },
            'hoverintent': {
                deps: ['jquery']
            },
            'fitvids': {
                deps: ['jquery']
            },
            'vimeo': {
                deps: ['jquery']
            }
    }
};



var config = {
    paths: {
        "jQuery1.11.1": "js/jquery",
        "jQueryNC":  "js/jquery1.11.1-noconflict",
        "bootstrapJS": "js/bootstrap.min",
        "jQuery1.9.1": "js/jquery-1.9.1.min",
        "jQuery191NC": "js/jquery1.9.1-noconflict"
    },
};





var config = {
    paths: {
        "jQuery1.11.1": "js/jquery",
        "jQueryNC":  "js/jquery1.11.1-noconflict",
        "bootstrapJS": "js/bootstrap.min"
    },
};

<script>
 require(["jQueryNC", "bootstrapJS"],function(jQuery){
   (function ($) {
       $('.carousel').carousel({
          interval: 5000 //changes the speed
       });
   })(jQuery);
 });
</script>




<script>
 require(["jQueryNC"],function(jQuery){
        (function ($)
        {
             var version = $().jquery;
             alert(version);

  $('.carousel').carousel({
      interval: 5000 //changes the speed
  })




        })(jQuery);
 });
</script>




var config = {
    paths: {
        "jQuery1.11.1": "js/jquery",
        "jQueryNC":  "js/jquery1.11.1-noconflict"
    },
};



var config = {
    paths: {
        "jQuery191": "js/jquery1.9.1.min",
        "jQueryNC":  "js/jquery191-noconflict"
    },
};

Added the database “quen101_basketball”.
qZF-tx*ynh]B

You have successfully created a MySQL user named “quen101_bskuser”.

You have given the requested privileges on the database “quen101_basketball” to the user “quen101_bskuser”.

-----------------------------------------

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

 // Map our module names to their relevant script
var config = {
    "map": {
        "*": {
            "bootstrap-carousel": "js/vendor/bootstrap/carousel",
            "bootstrap-transition": "js/vendor/bootstrap/transition",
            "carousel-init": "js/carousel"
        }
    },

    // Define dependencies for none AMD third party modules - Do not use for scripts that use require - 
    // http://requirejs.org/docs/api.html#config-shim
    "shim": {
        "js/vendor/bootstrap/carousel": ["jquery", "bootstrap-transition"],
        "js/vendor/bootstrap/transition": ["jquery"]

    }
}; 

--------------------------------------------------------------

var config = {
    map: {
        '*': {
            'jqr1-11-1': 'mage/jquery',
            'jqr1-9-1': 'mage/jquery-1.9.1.min',
            'owlCarousel': 'mage/owl.carousel.min',
            'bootstrapjs': 'mage/bootstrap.min',
        }
    },
    shim: {
        "bootstrapjs": {
           deps: ['jqr1-11-1'],
        },
        "owlCarousel": {
                deps: ['jqr1-11-1', 'jqr1-9-1'],
        }
    },

};






 
 
 
 
 
  


