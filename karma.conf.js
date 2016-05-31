module.exports = function(config) {
  config.set({
    
    basePath: '',
    frameworks: ['jasmine'],
    files: [
            'node_modules/core-js/client/shim.min.js',
            'dist/lib/es6-shim.min.js',
            'dist/lib/system.js',
            'node_modules/reflect-metadata/Reflect.js',
            'test-main.js',
            { pattern: 'node_modules/@angular/*.js', included: false, serve: true, watch: false },
            { pattern: 'node_modules/@angular/src/**/*.js', included: false, serve: true, watch: false },
            { pattern: 'dist/**/*.js', included: false, serve: true, watch: true },
            { pattern: 'rxjs/**/*.js', included: false, serve: true, watch: false },
            {
                pattern: 'test/**/*spec.js',
                included: false,
                serve: true,
                watch: true
            }
        ],
        exclude: [
        ],
        preprocessors: {
    	    'dist/index.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        plugins: [
           'karma-jasmine',
           'karma-coverage',
           'karma-phantomjs-launcher'
        ]
  })
}