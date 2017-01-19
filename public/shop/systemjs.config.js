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
      scripts: "assets/js",
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
      scripts: {
        defaultExtension: 'js',
        format: 'global'
      },
      shop: {
        main: './main.js',
        defaultExtension: 'js',
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
  
        'assets/js/fancybox/lib/jquery.mousewheel-3.0.6.pack.js': {
          format: 'global'
        },
        'assets/js/fancybox/source/jquery.fancybox.pack.js?v=2.1.6': {
          format: 'global'
        },
        'assets/js/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5': {
          format: 'global'
        },
        'assets/js/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6': {
          format: 'global'
        },
        'assets/js/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7': {
          format: 'global'
        },

      }

  });
})(this);
