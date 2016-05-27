(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'traceur': 'node_modules/traceur/bin/traceur.js',
        'app': 'app', // 'dist',
        'angular': 'node_modules/angular',
        'angular-route': 'node_modules/angular-route',
        'angular-oauth2': 'node_modules/angular-oauth2',
        'angular-cookies': 'node_modules/angular-cookies',
        'query-string': 'node_modules/query-string',
        'strict-uri-encode': 'node_modules/strict-uri-encode'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'app.js',  defaultExtension: 'js' },
        'angular': { main: 'angular.js',  defaultExtension: 'js' },
        'angular-route': { main: 'angular-route.js',  defaultExtension: 'js' },
        'angular-oauth2': { main: 'src/angular-oauth2.js',  defaultExtension: 'js' },
        'angular-cookies': { main: 'index.js',  defaultExtension: 'js' },
        'query-string': { main: 'index.js',  defaultExtension: 'js' },
        'strict-uri-encode': { main: 'index.js', defaultExtension: 'js' }
    };
    
    var meta = {
        'node_modules/angular/angular.js': {
            exports: 'angular',
            format: 'global'
        }
    };
    
    var config = {
        map: map,
        packages: packages,
        meta: meta
    };
    
    System.config(config);
})(this);