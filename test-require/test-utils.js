define([], function() {

    // Adapted from: http://stackoverflow.com/questions/11439540/how-can-i-mock-dependencies-for-unit-testing-in-requirejs
    function createRequireContext(stubs) {

        var map = {};

        Object.keys(stubs).forEach(function(key) {
            map[key] = 'stub-' + key;
        });

        var context = require.config({
            context: Math.floor(Math.random() * 1000000),
            map: { '*': map }
        });

        Object.keys(stubs).forEach(function(key) {

            var stubname = 'stub-' + key;

            define(stubname, function () {
                return stubs[key];
            });

        });

        return context;

    }

    return {
        createRequireContext: createRequireContext
    };

});