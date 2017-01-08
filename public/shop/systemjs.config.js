/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      shop: '/',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      //'jquery': 'assets/js/jquery.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      shop: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    },

    meta: { 
      'assets/js/widgets.js': { 
        format: 'global' 
      }, 
      'assets/js/jquery.js': { 
        format: 'global' 
      },
      'assets/js/google-code-prettify/prettify.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-transition.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-modal.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-scrollspy.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-alert.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-dropdown.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-tab.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-tooltip.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-popover.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-button.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-collapse.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-carousel.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-typeahead.js': { 
        format: 'global' 
      },
      'assets/js/bootstrap-affix.js': { 
        format: 'global' 
      },
      'assets/js/jquery.lightbox-0.5.js': { 
        format: 'global' 
      },
      'assets/js/bootsshoptgl.js': { 
        format: 'global' 
      }
    }

  });
})(this);
