require(
    ['factory/init'],
    function (factory) {
        'use strict';

        var examples = {
            factory : factory
        };

        window.runExample = function (example) {
            examples[example].init();
        };  
    }
);