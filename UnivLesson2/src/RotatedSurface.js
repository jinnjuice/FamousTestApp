define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here

    // rotated surface
    var translateMod = new StateModifier({
        transform: Transform.translate(100, 400, 0)
    });

    var rotateMod = new StateModifier({
        transform: Transform.rotateZ(Math.PI/4)
    });

    var rotatedSurface = new Surface({
        size: [200, 100],
        content: 'rotated surface',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#fa5c4f'
        }
    });

    mainContext.add(translateMod).add(rotateMod).add(rotatedSurface);

});
