define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    var stateModifier = new StateModifier({
        transform: Transform.translate(300, 100, 0)
    });

    // your app here
    var firstSurface = new Surface({
        size: [100, 100],
        properties: {
            backgroundColor: '#FA5C4F'
        }
    });

    mainContext.add(stateModifier).add(firstSurface);
});
