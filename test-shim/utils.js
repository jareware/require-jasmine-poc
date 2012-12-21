(function(exports) {

    "use strict";

    var definitionQueue = [];
    var toBeDefined = false;
    var defines = exports.defines = {};

    function defineNext() {

        if (!definitionQueue.length || toBeDefined)
            return;

        toBeDefined = definitionQueue.pop();

        window.define = function(dependencies, definition) {
            defines[toBeDefined] = definition;
            toBeDefined = false;
            defineNext();
        };

        document.write('<script src="' + toBeDefined + '.js"><\/script>');

    }

    exports.shimRequire = function(moduleName) {

        definitionQueue.push(moduleName);

        defineNext();

    };

})(window.testUtils = {});