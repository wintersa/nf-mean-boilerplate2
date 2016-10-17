(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app':                        'js/app',
        'rxjs':                       'js/vendor/rxjs',
        '@angular':                   'js/vendor/@angular',
        'primeui':                    'js/vendor/primeui',
        'primeng':                    'js/vendor/primeng',
        'uuid':                       'js/vendor/uuid'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'primeui':                    { defaultExtension: 'js' },
        'primeng':                    { defaultExtension: 'js' },
        'uuid':                       { main: 'uuid.js' ,defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);


/*
 Copyright 2016 NForce IT - A.R.Winters. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://nforce-it.nl/license
 */