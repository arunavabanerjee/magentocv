
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
            'modtheme/jqryjs': 'js/jquery',
            'modtheme/jqr191': 'js/jquery-1.9.1.min',
            'modtheme/owlCarousel': 'js/owl.carousel.min',
        }
    },
    paths: {
            'modtheme/jqryjs': 'js/jquery',
            'modtheme/jqr191': 'js/jquery-1.9.1.min',
            'modtheme/owlCarousel': 'js/owl.carousel.min',
    },
    shim: {
        "modtheme/owlCarousel": {
                deps: ['modtheme/jqryjs', 'modtheme/jqr191'],
        }
    },

};
 

--------------------------------------------------------------- 
  
var config = {
    map: {
        "*": {
            "jquery191":             "js/jquery-1.9.1.min.js",
            "jqueryjs":              "js/jquery.js",
            "modernizr":             "js/modernizr.js",
            "bootstrapjs":           "js/bootstrap.min.js",
            "owl-carousel":          "js/owl.carousel.js",
            "main":                  "js/main.js",
        }
    },

};
  
<script type="text/javascript">
require(['jquery'],function($){
    $(window).load(function() {
        alert('jquery working');
    });
});
  
  
<script>
 /* var $jj = $.noConflict();
  $jj('.carousel').carousel({
      interval: 5000 //changes the speed
  }) */
</script>

-------------------------------------------------------------------------------------
  
var config = {
    map: {
        '*': {
            'jqryjs': 'js/jquery',
            'jqr191': 'js/jquery-1.9.1.min',
            'owlCarousel': 'js/owl.carousel.min',
            'bootstrapjs': 'js/bootstrap.min',
        }
    },
    paths: {
            'jqryjs': 'mage/js/jquery',
            'jqr191': 'mage/js/jquery-1.9.1.min',
            'owlCarousel': 'mage/js/owl.carousel.min',
            'bootstrapjs': 'mage/js/bootstrap.min',
    },
    shim: {
        "bootstrapjs": {
           deps: ['jqrys'],
        },
        "owlCarousel": {
                deps: ['jqryjs', 'jqr191'],
        }
    },

};

-----------------------------------------------------------------------------------
 
 var config = {
    map: {
        '*': {
            'jqryjs': 'js/jquery',
            'jqr191': 'js/jquery-1.9.1.min',
            'owlCarousel': 'js/owl.carousel.min',
            'bootstrapjs': 'js/bootstrap.min',
        }
    },
    paths: {
            'jqryjs': 'mage/jqryjs',
            'jqr191': 'mage/js/jquery-1.9.1.min',
            'owlCarousel': 'mage/js/owl.carousel.min',
            'bootstrapjs': 'mage/bootstrapjs',
    },
    shim: {
        "bootstrapjs": {
           deps: ['jqrys'],
        },
        "owlCarousel": {
                deps: ['jqryjs', 'jqr191'],
        }
    },

};

----------------------------------------------------------------
var config = {
    map: {
        '*': {
            'jqr1-11-1': 'js/jquery',
            'jqr1-9-1': 'js/jquery-1.9.1.min',
            'owlCarousel': 'js/owl.carousel.min',
            'bootstrapjs': 'js/bootstrap.min',
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




 
 
 
 
 
  


