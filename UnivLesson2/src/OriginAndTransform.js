define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var mainContext = Engine.createContext();

    var surface = new Surface({
        size: [200, 200],
        content: 'rotated with different origin and align',
        properties: {
            color: 'white',
            backgroundColor: '#fa5c4f',
            textAlign: 'center'
        }
    });

    var modifier = new StateModifier({
        align: [0.5, 0.5],
        origin: [0.5, 0.5],
        transform: Transform.rotateZ(Math.PI/6)
    });

    mainContext.add(modifier).add(surface);

});
