define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var StateModifier = require('famous/core/StateModifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var surface = new Surface({
        size: [100, 100],
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#fa5c4f'
        }
    });

    var stateModifier = new StateModifier();

    mainContext.add(stateModifier).add(surface);

    stateModifier.setTransform(
        Transform.translate(100, 300, 0),
        { duration: 1000, curve: 'easeInOut' }
    );
});
